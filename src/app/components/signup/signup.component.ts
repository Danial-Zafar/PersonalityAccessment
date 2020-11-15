import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {SignUp} from './signup.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase } from '@angular/fire/database';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import { take,/*debounceTime*/ } from 'rxjs/operators';
//import {Subject} from 'rxjs';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignUpComponent implements OnInit {
  signup: FormGroup;
  // private _success = new Subject<string>();
  // staticAlertClosed = false;
  // successMessage = '';
  messages = 'Your can login now.';
  constructor(
    public auth: AngularFireAuth,
    private fb: FormBuilder,
    private db: AngularFireDatabase,
    private router: Router) { }

  ngOnInit(): void {
    this.signup = this.fb.group({
      email : ['', [Validators.required ]],
      password : ['', [Validators.required ]],
      repassword : ['', [Validators.required ]],
    });


    // setTimeout(() => this.staticAlertClosed = true, 20000);

    // this._success.subscribe(message => this.successMessage = message);
    // this._success.pipe(
    //   debounceTime(5000)
    // ).subscribe(() => this.successMessage = '');
  }

  // public changeSuccessMessage() {
  //   this._success.next(`${new Date()} - Message successfully changed.`);
  // }

  onSignUp({ value, valid }: { value: SignUp, valid: boolean }) {
    console.log(value, valid);
    this.auth.createUserWithEmailAndPassword(value.email, value.password)
      .then((resp) => {
        const usersRef = this.db.list('users');
        usersRef.set(resp.user.uid, {
          isFilled : false,
          email: value.email
        });
        // usersRef.push({ isFilled : false, uid: resp.user.uid });
        //this.changeSuccessMessage();
        this.signup.reset();
      })
      .catch((error) => {
        console.error('error', error);
      });
      this.signup.reset();
      
  }


  signInWithGoogle(){
    this.auth.signInWithPopup(new auth.GoogleAuthProvider())
      .then((result) => {
        let jwt = result.user.getIdToken();
        console.log('jwt', jwt);
        let user = result.user;
        console.log('user', user);
        const usersRef = this.db.list('users');
        usersRef.snapshotChanges()
        .pipe(take(1))
        .subscribe((usrs: any[]) => {
          let findResult = usrs.find((usr) => user.uid === usr.key);
          console.log(findResult);
          if (!findResult) {

            usersRef.set(user.uid, {
              isFilled : false,
              email: user.email
              
            });
            this.router.navigate(['/general-profile']);
          }
          else{
            console.log('findResult', findResult.payload.val());
            if(findResult.payload.val().isFilled)
            {
              this.router.navigate(['/dashboard', { outlets: { dashboard: 'profile' } }]);
            }
            else
            {
              this.router.navigate(['/general-profile']);
            }
          }
        }, (error) => console.error('error', error));
        
      })
      .catch((error) => console.error('error', error));
  }
  
  signInWithFacebook(){
    this.auth.signInWithPopup(new auth.FacebookAuthProvider())
      .then((result) => {
        let jwt = result.user.getIdToken();
        console.log('jwt', jwt);
        let user = result.user;
        console.log('user', user);
        const usersRef = this.db.list('users');
        usersRef.snapshotChanges()
        .pipe(take(1))
        .subscribe((usrs: any[]) => {
          let findResult = usrs.find((usr) => user.uid === usr.key);
          console.log(findResult);
          if (!findResult) {

            usersRef.set(user.uid, {
              isFilled : false,
              email: user.email
              
            });
            this.router.navigate(['/general-profile']);
          }
          else{
            console.log('findResult', findResult.payload.val());
            if(findResult.payload.val().isFilled)
            {
              this.router.navigate(['/dashboard', { outlets: { dashboard: 'profile' } }]);
            }
            else
            {
              this.router.navigate(['/general-profile']);
            }
          }
        }, (error) => console.error('error', error));
        
      })
      .catch((error) => console.error('error', error));
  }
}
