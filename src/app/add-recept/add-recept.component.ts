
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { Subject} from 'rxjs/Subject';
import {ActivatedRoute, Router} from '@angular/router';
import { FirebaseApp } from 'angularfire2';
import 'firebase/storage';
import * as ImageCapture from 'image-capture';

@Component({
	selector: 'app-add-recept',
	templateUrl: './add-recept.component.html',
	styleUrls: ['./add-recept.component.css']
})
export class AddReceptComponent implements OnInit {
	$items: FirebaseListObservable<any[]>;
	newItem: any = {
		ingredienten: []
	};
	items: Array<any> = [];
	videoPlayer;
	imageBlob;
	takingPhoto;
	photoFilled = false;

	id: string;
	private sub: any;


	constructor(private af: AngularFireDatabase, private route: ActivatedRoute, private fb: FirebaseApp, private router: Router) {
		this.$items = af.list('/recepten', {
			query: {
				orderByChild: 'size'
			}
		});
	}

	ngOnInit() {

		this.sub = this.route.params.subscribe(params => {
			this.id = params['id'];

			if (this.id) {
				this.af.object(`/recepten/${this.id}`).subscribe(a => this.newItem = a);
			}
		});

		this.router.events.subscribe(a => this.stopStreaming());
	}

	add() {
		if (this.id) {
			this.$items.update(this.id, this.newItem);
		} else {
			this.$items.push(this.newItem);
		}
	}

	addIngredient() {
		this.newItem.ingredienten.push({
			naam: null,
			hoeveelheid: '',
			eenheid: null
		});
	}



 startVideo() {
	 const that = this;
	// enables the camera, if possible
	if ('mediaDevices' in navigator) {
		navigator.mediaDevices.getUserMedia({ video: true })
			.then(function(stream){
				that.videoPlayer = document.querySelector('#player');
				that.videoPlayer.srcObject = stream;

				console.log(that.videoPlayer);

			})
			.catch(function(error){
				console.log('There was an error', error);
			});

			that.takingPhoto = true;
	}

}
 captureImage() {
	 const that = this;
	navigator.mediaDevices.getUserMedia({ video: true })
			.then(function(stream){
				that.photoFilled = true;
				const mediaStreamTrack = stream.getVideoTracks()[0];
			  const imageCapture = new ImageCapture.ImageCapture(mediaStreamTrack);
				const img = document.querySelector('img');
				imageCapture.takePhoto()
					.then(blob => {
						that.imageBlob = blob;
						img.src = URL.createObjectURL(blob);
						img.onload = () => { URL.revokeObjectURL(img.src); };

						that.takingPhoto = false;
						that.stopStreaming();
					})
					.catch(error => console.error('takePhoto() error:', error));
		});


}

 pickImage() {
	this.stopStreaming();
}
 stopStreaming() {
	if (this.videoPlayer) {
		this.videoPlayer.srcObject.getVideoTracks() // gives access to the running video streams of the object
			.forEach(function(track){
				track.stop(); // stop all streams
			});
	}
}


	save() {
		const that = this;

		const storage = this.fb.storage().ref();
		const name = (new Date()).getTime() + '.png';
		const f = storage.child('recept-images/' + name);
			// blob hier
		const task = f.put(this.imageBlob);

		task.on('state_changed', function(snapshot) {
		}, function(error) {
			console.error('Unable to save image.');
			console.error(error);
		}, function() {
			that.stopStreaming();
			const url = task.snapshot.downloadURL;
			console.log('Saved to ' + url);
			that.newItem.afbeeldingurl = url;

			that.add();
		});
 }

	trackByIndex(index: number, obj: any): any {
		return index;
	}
}



