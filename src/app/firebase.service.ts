import { Injectable, OnInit } from '@angular/core';
import * as firebase from 'firebase';

import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

@Injectable()
export class FirebaseService {
    rootDatabase: FirebaseListObservable<any[]>;

    constructor(public db: AngularFireDatabase) {

    }

    addRoom(ref, object) {
        this.db.list(ref).push(object);
    }

}
