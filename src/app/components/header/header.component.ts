import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { User } from 'firebase';

import { take } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  isFilled:boolean =false;
 
  constructor(  
    public auth: AngularFireAuth,
    private db: AngularFireDatabase) { }

  ngOnInit(): void {
    
    this.auth.onAuthStateChanged((user) => {
      console.log('user ----', user);
      if (!user) {
        this.isFilled = false;
        return;
      }
      this.db.object (`users/${user.uid}` ).valueChanges()
        .pipe(take(1))
        .subscribe((users) => 
        {
          if (!users) {
            return;
          }
          this.isFilled = (users as any).isFilled;
          console.log(this.isFilled);
        },(error)=>{
          console.error(error,'error'); 
      });
    }, (error) => console.error('error', error));
    // this.auth.currentUser.then((user : User) => {
    //   console.log('filled',this.isFilled);
    //   console.log(user);
    //   this.db.object (`users/${user.uid}` ).valueChanges()
    //     .pipe(take(1))
    //     .subscribe((users) => 
    //     {
    //       this.isFilled = (users as any).isFilled;
    //       console.log(this.isFilled);
    //     },(error)=>{
    //       console.error(error,'error');
          
    //     }); 

    // }).catch((error) => {
    //   console.error('error', error);
    // });

   
  }

}
