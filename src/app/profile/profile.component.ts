import { Component, OnInit } from '@angular/core';
import { MessagingService } from '../service/messaging.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

	constructor(private messaging: MessagingService) { }

  ngOnInit() {
	}

	requestPermission() {
		this.messaging.getPermission();
	}

	send() {
		this.messaging.send('Bericht', 'Goed bericht').subscribe(a => console.log(a));
	}

}
