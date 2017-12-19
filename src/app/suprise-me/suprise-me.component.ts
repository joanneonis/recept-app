import { Component, OnInit } from '@angular/core';
import * as Shake from 'shake.js';

@Component({
  selector: 'app-suprise-me',
  templateUrl: './suprise-me.component.html',
  styleUrls: ['./suprise-me.component.css']
})
export class SupriseMeComponent implements OnInit {

  constructor() { }

  ngOnInit() {

			// create a new instance of shake.js.
			const myShakeEvent = new Shake({
					threshold: 15
			});

			// start listening to device motion
			myShakeEvent.start();

			// register a shake event
			window.addEventListener('shake', shakeEventDidOccur, false);

			// shake event callback
			function shakeEventDidOccur () {
					// put your own code here etc.
					alert('Shake!');
			}
		}
}
