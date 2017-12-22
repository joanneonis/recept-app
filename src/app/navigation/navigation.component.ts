import { Component, OnInit } from '@angular/core';
import { MessagingService } from '../service/messaging.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

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
