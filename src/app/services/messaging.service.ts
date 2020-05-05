import { Injectable } from "@angular/core";
import { AngularFireMessaging } from "@angular/fire/messaging";
import { BehaviorSubject } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class MessagingService {
  currentMessage = new BehaviorSubject(null);
  constructor(private afm: AngularFireMessaging) {
    this.afm.messaging.subscribe((_message) => {
      _message.onMessage = _message.onMessage.bind(_message);
      _message.onTokenRefresh = _message.onTokenRefresh.bind(_message);
    });
  }

  requestPermission() {
    this.afm.requestToken.subscribe((token) => {
      console.log(token);
    });
  }
  recieveMesssage() {
    this.afm.messages.subscribe((payload) => {
      console.log(payload);
      this.currentMessage.next(payload);
    });
  }
}
