import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './firebase.service';
import { ChatService } from './chat.service';

@Component({
    selector: 'chat-panel',
    templateUrl: './chat-panel.component.html',
    styleUrls: ['./chat-panel.component.scss']
})

export class ChatPanelComponent {
    messagesList: any;
    textContent: string;

    constructor(public chatService: ChatService) {
    }

    addMessage()  {
        this.chatService.addMessage(this.textContent);
    }

}
