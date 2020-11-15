import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { User } from 'firebase';
import { AngularFireDatabase } from '@angular/fire/database';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  user: User;
  results$: Observable<any>;
  constructor( 
    public auth: AngularFireAuth,
    private db: AngularFireDatabase, 
    private router: Router) { }
    
  ngOnInit(): void {
    
    document.body.style.backgroundImage = "url('assets/img/bg.png')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundSize = "cover";

    this.auth.currentUser.then((user: User) => {
      this.results$ = this.db.object(`results/${user.uid}` ).valueChanges();
    }).catch((error) => console.error('error', error));
    
  }
  logOut(){
    this.auth.signOut()
      .then((resp) => {
        this.router.navigate(['/home']);
          })
      .catch((error) => console.error('error', error));
  }

  compare(a: any, b: any) {
    console.log('a', a);
    console.log('b', b);
    if (a === 'A' && b === 'B') {
      console.log('inside if');
      return true;
    }
    return false;
  }

}
