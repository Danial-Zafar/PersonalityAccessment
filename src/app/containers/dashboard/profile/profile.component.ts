import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { User } from 'firebase';
import { AngularFireDatabase } from '@angular/fire/database';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

 
  user: User;
  results$: Observable<any>;
  constructor(
    public auth: AngularFireAuth,
    private db: AngularFireDatabase,
  ) { }

  ngOnInit(): void {
    console.log('profile');
    this.auth.currentUser.then((user: User) => {
      this.results$ = this.db.object(`users/${user.uid}` ).valueChanges();
    }).catch((error) => console.error('error', error));
  }

}
