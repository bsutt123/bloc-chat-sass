import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SidePanelComponent } from './side-panel.component';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { FirebaseService } from './firebase.service';
import { ChatPanelComponent } from './chat-panel.component';
import { ChatService } from './chat.service';
import { CookieService } from 'ngx-cookie-service';
import { ModalComponent } from './modal.component';
import { DialogResult } from './modal.component'
import { MdDialogModule
        } from '@angular/material';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { RoomsService } from './rooms.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ModalService } from './modal.service';


@NgModule({
  declarations: [
    AppComponent,
    SidePanelComponent,
    ChatPanelComponent,
    ModalComponent,
    DialogResult
  ],
  entryComponents: [
      ModalComponent,
      DialogResult
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MdDialogModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [ FirebaseService, CookieService, RoomsService, ChatService, ModalService ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
