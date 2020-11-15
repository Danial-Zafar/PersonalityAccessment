import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from './login.interface';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';

import { take } from 'rxjs/operators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: FormGroup;
  
  constructor(private fb: FormBuilder,
    public auth: AngularFireAuth,
    private db: AngularFireDatabase,
    private router: Router) { }

  ngOnInit( ): void {
    this.user = this.fb.group({
      name: ['', [Validators.required ]],
      password: ['', [Validators.required ]]
    });
  }

  onSubmit({ value, valid }: { value: User, valid: boolean }) {
    console.log(value, valid);
    this.auth.signInWithEmailAndPassword(value.name, value.password)
      .then((resp) => {

        const userRef = this.db.object(`users/${resp.user.uid}`).valueChanges();
          userRef.pipe(take(1))
          .subscribe((user: any) => {
           // console.log('user', user);
            if (user.isFilled) {
              this.router.navigate(['/dashboard', { outlets: { dashboard: 'profile' } }]);
            } else{
              this.router.navigate(['/general-profile']);
            }
          }, (error) => console.error('error', error));

          //  this.db.list('results').set(resp.user.uid, {
          //    mbti: ['A','B','C','D','E','F','G','H'],
          //    raisec: ['R','A','I','S','E','C']
          //  });
      
        }).catch((error) => console.error('error', error));

        
        
      //   this.db.list('/users', ref => ref.orderByChild('email').equalTo(value.name)).valueChanges()
      //     .pipe(take(1))
      //     .subscribe((users) => {
            
      //       let user = users.find((user: any) => user.email === value.name);
     
      //       if (user) {
      //         if ((user as any).isFilled) {
      //           this.router.navigate(['/dashboard', { outlets: { dashboard: 'profile' } }]);
      //         } 
      //         else {
      //           this.router.navigate(['/general-profile']);
      //         }
      //       } else {
      //         console.error(`User not found with email ${value.name}`);
      //       }

      //     }, (error) => {
      //       console.error('error', error);
      //     });
      // })
      // .catch((error) => {
      //   console.error('error', error);
      // });


  }

}
