import { Injectable, OnInit } from '@angular/core';
import { FirebaseService } from './firebase.service';

@Injectable()
export class ChatService implements OnInit {
    messageList: any;

    constructor(public firebaseService: FirebaseService) {

    }

    ngOnInit() {
    }

    updateChatMessages(roomKey) {
        if (roomKey !== "") {
            let ref = '/messages/'+roomKey;
            this.messageList = this.firebaseService.db.list(ref, { query: {
                limitToLast: 50,
                orderByChild: 'time'
            }});
        }
    }

    addMessage(roomKey,object) {
        let ref = '/messages/'+roomKey;
        this.firebaseService.db.list(ref).push(object);
    }

}
