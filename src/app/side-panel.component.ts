import { Component, OnInit } from '@angular/core';
import {ViewEncapsulation} from '@angular/core';
import { RoomsService } from './rooms.service';


@Component({
  selector: 'side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SidePanelComponent implements OnInit {
    roomsArray: any;
    newRoomName: string;
    constructor(public roomsService: RoomsService){
        this.newRoomName = "";
    }

    ngOnInit() {
        let subscription = this.roomsService.roomsList.subscribe((result) =>{
            this.roomsArray = result;
        });
    }

    addRoom(){
        if(this.newRoomName !== "") {
            this.roomsService.addRoom(this.newRoomName);
        } else {}
    }

    setFeatured(roomKey) {
        this.roomsService.setFeatured(roomKey);
    }

};
