import { Component, OnInit } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { MessagingService } from './service/messaging.service';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

	// Injecting SwPush dependency

	constructor(private auth: AngularFireAuth) {}

	ngOnInit() {
		this.auth.auth.signInAnonymously().then( a => console.log(a));
	}
}
