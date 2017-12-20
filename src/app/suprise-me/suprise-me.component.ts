import { Component, OnInit } from '@angular/core';
import * as Shake from 'shake.js';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import {HostListener} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';

@Component({
  selector: 'app-suprise-me',
  templateUrl: './suprise-me.component.html',
	styleUrls: ['./suprise-me.component.css']
})
export class SupriseMeComponent implements OnInit {
	eventSubscription: any;

	$items: FirebaseListObservable<any[]>;
	newItem = {ingredienten: []};
	items: Array<any>= [];
	randomItem = [];
	ctrl = this;

	constructor(af: AngularFireDatabase) {
		this.$items = af.list('/recepten', {
			query: {
				orderByChild: 'size'
			}
		});
	}

  ngOnInit() {
			this.$items.subscribe(a => {
				this.items = a;
				this.randomRecept();
			});

			// create a new instance of shake.js.
			const myShakeEvent = new Shake({
					threshold: 15
			});

			// start listening to device motion
			myShakeEvent.start();

			// register a shake event
			// window.addEventListener('shake', this.shakeEventDidOccur, false);

			this.eventSubscription = Observable.fromEvent(window, 'shake').subscribe(e => {
				this.randomRecept();
				console.log('test');
			});
		}

		randomRecept() {
			this.randomItem = this.items[Math.floor(Math.random() * this.items.length)];
		}

}
