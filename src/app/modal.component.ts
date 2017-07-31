import { Component, AfterViewInit } from '@angular/core';
import { FirebaseService } from './firebase.service';
import { MdDialog, MdDialogRef } from '@angular/material';
import { CookieService } from 'ngx-cookie-service';
import { ModalService } from './modal.service'


@Component({
    selector: 'modal',
    template: ` This is the Modal `
})
export class ModalComponent implements AfterViewInit {
    constructor(public dialog: MdDialog, public cookieService: CookieService, public modalService: ModalService) {}

    ngAfterViewInit() {
        if (!this.cookieService.check('username')) {
            this.openDialogForCookie();
        } else {
            let username = this.cookieService.get('username')
            this.modalService.setUsername(username);
        }
    }

    openDialogForCookie() {
        let options = {
            disableClose: true
        }
        let dialogRef = this.dialog.open(DialogResult, options);
        dialogRef.afterClosed().subscribe( (result) => {
            this.cookieService.set('username', result)
            let username = result;
            this.modalService.setUsername(username);
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
