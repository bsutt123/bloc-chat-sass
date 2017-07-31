import { Injectable, OnInit } from '@angular/core';
import { FirebaseService } from './firebase.service';
import { ChatService } from './chat.service';



@Injectable()
export class RoomsService {
    roomsList: any;
    featuredRoomKey: string;
    constructor(public firebaseService: FirebaseService, public chatService: ChatService) {
        this.roomsList = this.firebaseService.db.list('/rooms');
        this.featuredRoomKey = "";
    }
     addRoom(newName) {
         let roomObject = {
             name: newName
         };
         this.firebaseService.addRoom('/rooms',roomObject);

     }
     setFeatured(roomKey) {
         this.featuredRoomKey = roomKey;
         this.chatService.updateChatMessages(roomKey);
     }
}
