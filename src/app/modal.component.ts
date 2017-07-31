import { Component, AfterViewInit } from '@angular/core';
import { FirebaseService } from './firebase.service';
import { MdDialog, MdDialogRef } from '@angular/material';
import { CookieService } from 'ngx-cookie-service';


@Component({
    selector: 'modal',
    template: ` This is the Modal `
})
export class ModalComponent implements AfterViewInit {
    username: string;
    constructor(public dialog: MdDialog, public cookieService: CookieService) {}

    ngAfterViewInit() {
        if (!this.cookieService.check('username')) {
            this.openDialogForCookie();
        } else {
            this.username = this.cookieService.get('username')
            console.log(this.username)
        }
    }

    openDialogForCookie() {
        let options = {
            disableClose: true
        }
        let dialogRef = this.dialog.open(DialogResult, options);
        dialogRef.afterClosed().subscribe( (result) => {
            this.cookieService.set('username', result)
            this.username = result
            console.log(this.username)
        })
    }



}

@Component({
    selector: 'new-user-modal',
    template: `<h1 md-dialog-title> What do you want your username to be? <h1>
                <div md-dialog-actions>
                    <form>
                        <input mdInput class="new-user-input" placeholder="New User Name" [(ngModel)]="username" name="newUserName">
                        <button md-raised-button class="new-user-button" (click)="dialogRef.close(username)"> Create your Name! </button>
                    </form>
                <div>`
})
export class DialogResult {
    constructor(public dialogRef: MdDialogRef<DialogResult>) {
    }
}
