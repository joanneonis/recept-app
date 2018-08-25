import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recept } from '../interfaces/recept.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-recept-full',
  templateUrl: './recept-full.component.html',
  styleUrls: ['./recept-full.component.css']
})
export class ReceptFullComponent implements OnInit, OnDestroy {
	id: string;
	private sub: any;
	$id: Subject<string> = new Subject<string>();

	$item: FirebaseListObservable<any[]>;
	item: Array<any>= [];

	constructor(private af: AngularFireDatabase, private route: ActivatedRoute) {
  }

  ngOnInit() {

		this.sub = this.route.params.subscribe(params => {
			this.id = params['id'];
			this.$id.next(this.id);

			this.$item = this.af.list('/recepten', {
      query: {
				orderByKey: true,
				equalTo: this.id
      }
		});

		this.$item.subscribe(a => { this.item = a[0]; console.log(a); });
    });

	}

	ngOnDestroy() {
    this.sub.unsubscribe();
  }


	 share() {
		let windowVar: any;

		windowVar = window.navigator;

		if (!('share' in navigator)) {
			alert('Web Share API not supported.');
			return;
		}

		windowVar.share({
				title: 'testbericht',
				text: 'Berichtekst',
				url: 'https://receptenapp-fe43f.firebaseapp.com'
			})
			.then(() => console.log('Successful share'))
			.catch(error => console.log('Error sharing:', error));
	}
}

//
