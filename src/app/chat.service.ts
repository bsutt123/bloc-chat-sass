import { Injectable, OnInit } from '@angular/core';
import { FirebaseService } from './firebase.service';
import { ModalService } from './modal.service';

@Injectable()
export class ChatService {
    messageList: any;
    currentRoomKey: string;
    constructor(public firebaseService: FirebaseService, public modalService: ModalService) {
        this.currentRoomKey = "";
    }

    updateChatMessages(roomKey) {
        if (roomKey !== "") {
            this.currentRoomKey = roomKey;
            let ref = '/messages/'+roomKey;
            this.messageList = this.firebaseService.db.list(ref, { query: {
                limitToLast: 50,
                orderByChild: 'time'
            }});
        }
    }

    addMessage(contentText) {
        let ref = '/messages/'+this.currentRoomKey;
        let messageObject = {
            content: contentText,
            time: Date.now(),
            user: this.modalService.getUsername()
        }
        this.firebaseService.db.list(ref).push(messageObject);
    }

}
