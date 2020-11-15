import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MBTI} from './mbti.interface';
import { User } from 'firebase';


@Component({
  selector: 'app-mbti',
  templateUrl: './mbti.component.html',
  styleUrls: ['./mbti.component.scss']
})
export class MbtiComponent implements OnInit {

  mbtitest: FormGroup;
  user : User;
  constructor(
    private fb: FormBuilder,
    public auth: AngularFireAuth,
    private db: AngularFireDatabase,
    private router: Router) { }
  
  ngOnInit(): void {

    this.auth.currentUser.then((user) => {
      this.user = user;
      console.log(user);
    }).catch((error) => {
      console.error('error', error);
    });
    this.mbtitest = this.fb.group({
      qone : ['', [Validators.required ]],  
      qtwo : ['', [Validators.required ]], 
      qthree : ['', [Validators.required ]], 
      qfour : ['', [Validators.required ]], 
      qfive : ['', [Validators.required ]], 
      qsix : ['', [Validators.required ]], 
      qseven : ['', [Validators.required ]], 
      qeight : ['', [Validators.required ]], 
      qnine : ['', [Validators.required ]], 
      qten : ['', [Validators.required ]], 
      qeleven : ['', [Validators.required ]], 
      qtwelve : ['', [Validators.required ]], 
      qthireen : ['', [Validators.required ]], 
      qfourteen : ['', [Validators.required ]], 
      qfiteen : ['', [Validators.required ]], 
      qsixteen : ['', [Validators.required ]], 
      qseventeen : ['', [Validators.required ]], 
      qeighteen : ['', [Validators.required ]], 
      qnineteen : ['', [Validators.required ]], 
      qtwenty : ['', [Validators.required ]], 
      qtwentyone : ['', [Validators.required ]], 
      qtwentytwo : ['', [Validators.required ]], 
      qtwentythree : ['', [Validators.required ]], 
      qtwentyfour : ['', [Validators.required ]], 
      qtwentyfive : ['', [Validators.required ]], 
      qtwentysix : ['', [Validators.required ]], 
      qtwentyseven : ['', [Validators.required ]], 
      qtwentyeight : ['', [Validators.required ]], 
      qtwentynine : ['', [Validators.required ]], 
      qthirty : ['', [Validators.required ]], 
      qthirtyone : ['', [Validators.required ]], 
      qthirtytwo : ['', [Validators.required ]], 
      qthirtythree : ['', [Validators.required ]], 
      qthirtyfour : ['', [Validators.required ]], 
      qthirtyfive : ['', [Validators.required ]], 
      qthirtysix : ['', [Validators.required ]], 
      qthirtyseven : ['', [Validators.required ]], 
      qthirtyeight : ['', [Validators.required ]], 
      qthirtynine : ['', [Validators.required ]], 
      qfourty : ['', [Validators.required ]], 
      qfourtyone : ['', [Validators.required ]], 
      qfourtytwo : ['', [Validators.required ]], 
      qfourtythree : ['', [Validators.required ]], 
      qfourtyfour : ['', [Validators.required ]],
      qfourtyfive : ['', [Validators.required ]], 
      qfourtysix : ['', [Validators.required ]], 
      qfourtyseven : ['', [Validators.required ]], 
      qfourtyeight : ['', [Validators.required ]], 
      qfourtynine : ['', [Validators.required ]], 
      qfifty : ['', [Validators.required ]], 
      qfiftyone : ['', [Validators.required ]], 
      qfiftytwo : ['', [Validators.required ]], 
      qfiftythree : ['', [Validators.required ]], 
      qfiftyfour : ['', [Validators.required ]], 
      qfiftyfive : ['', [Validators.required ]], 
      qfiftysix : ['', [Validators.required ]], 
      qfiftyseven : ['', [Validators.required ]], 
      qfiftyeight : ['', [Validators.required ]], 
      qfiftynine : ['', [Validators.required ]], 
      qsixty : ['', [Validators.required ]], 
      qsixtyone : ['', [Validators.required ]], 
      qsixtytwo : ['', [Validators.required ]], 
      qsixtythree : ['', [Validators.required ]],  
      qsixtyfour : ['', [Validators.required ]], 
      qsixtyfive : ['', [Validators.required ]],  
      qsixtysix : ['', [Validators.required ]], 
      qsixtyseven : ['', [Validators.required ]], 
      qsixtyeight : ['', [Validators.required ]], 
      qsixtynine : ['', [Validators.required ]], 
      qseventy : ['', [Validators.required ]] 
    });
  }

  onSubmit({ value, valid }: { value: MBTI, valid: boolean }) {
    console.log(value, valid);
    if(valid)
    {
      this.db.object(`mbti/${this.user.uid}`).set(value);
      this.router.navigate(['/dashboard', {outlets : {dashboard:'profile'}}]);
    }
  }
}
