import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import {RAISEC} from './raisec.interface';
import { User } from 'firebase';

@Component({
  selector: 'app-raisec',
  templateUrl: './raisec.component.html',
  styleUrls: ['./raisec.component.scss']
})
export class RaisecComponent implements OnInit {
 
  user : User;
  raisectest: FormGroup;
  constructor(
    private fb: FormBuilder,
    public auth: AngularFireAuth,
    private db: AngularFireDatabase,
    private router: Router
    ) { }

  ngOnInit(): void {
    
    this.auth.currentUser.then((user) => {
      this.user = user;
      console.log(user);
    }).catch((error) => {
      console.error('error', error);
    });

    this.raisectest = this.fb.group({
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
      qfourtytwo : ['', [Validators.required ]]
    });
  }

  onSubmit({ value, valid }: { value: RAISEC, valid: boolean }) {
  
    if(valid)
    {
      this.db.object(`raisec/${this.user.uid}`).set(value);
      this.router.navigate(['/dashboard', {outlets : {dashboard:'profile'}}]);
    }
    
  }
}
