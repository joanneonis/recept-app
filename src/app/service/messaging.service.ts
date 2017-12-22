import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import 'rxjs/add/operator/take';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MessagingService {
  messaging = firebase.messaging();
	currentMessage = new BehaviorSubject(null);

	constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth, private httpClient: HttpClient) { }

  updateToken(token) {
    this.afAuth.authState.take(1).subscribe(user => {
      if (!user) {return; }
      const data = { [user.uid]: token };
      this.db.object('fcmTokens/').update(data);
    });
  }
  getPermission() {
      this.messaging.requestPermission()
      .then(() => {
        console.log('Notification permission granted.');
        return this.messaging.getToken();
      })
      .then(token => {
        console.log(token);
        this.updateToken(token);
      })
      .catch((err) => {
        console.log('Unable to get permission to notify.', err);
      });
    }
    receiveMessage() {
       this.messaging.onMessage((payload) => {
        console.log('Message received. ', payload);
        this.currentMessage.next(payload);
      });
		}

		send(title: string, message: string) {
			return this.httpClient.post('https://fcm.googleapis.com/fcm/send',
			// tslint:disable-next-line:max-line-length
			{ 'notification': {
				'title': title,
				'body':  message,
				'click_action' : 'https://angularfirebase.com'
				},
			 // tslint:disable-next-line:max-line-length
			 'to' : 'c-1uqSEHHAs:APA91bHG4geYf6qiE8BdycsL7dDdCXcOd1nBK2mSqSdl_WGRJsc6DBKveKDO-klj42gDaz-dl0D0CbkDkx7TRQza2fuyjLJ7WJDM37uKV_I8hvWI8E51PqTv6pM6SC_QAmJ3Grsh3_7y'
			},
			{
				headers: {
					'Content-Type': 'application/json',
					// tslint:disable-next-line:max-line-length
					'Authorization': 'key=AAAAJs-PNOc:APA91bH1Czh7SBTnQRqeVMNsOEHKkiGrcLjHriGvPYVGRLTULF9GiCMOrV6qVz7cUXHh8SxQbzWChrXNqO8qev9DMeft3NAqsoGWi_gNr4oy3cP8mN3_JV-sGCzIrF9WAY3VTsH_74Ya'
				}
			}
		);
		}
}
