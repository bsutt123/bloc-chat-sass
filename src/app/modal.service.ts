import { Injectable } from '@angular/core';

@Injectable()
export class ModalService {
    username: string;

    constructor() {}

    setUsername(name) {
        this.username = name;
        console.log("You set the username to "+this.username)
    }

    getUsername() {
        return this.username;
    }


}
