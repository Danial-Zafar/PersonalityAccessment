import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { User } from 'firebase';

import {StepOne} from './stepone.interface';
import {StepTwo} from './steptwo.interface';
import {StepThree} from './stepthree.interface';
import {StepFour} from './stepfour.interface';
import {StepFive} from './stepfive.interface';
import {StepSix} from './stepsix.interface';
import {StepSeven} from './stepseven.interface';
import {StepEight} from './stepeight.interface';
import {StepNine} from './stepnine.interface';



@Component({
  selector: 'app-awarenessjourneystep1',
  templateUrl: './awarenessjourneystep1.component.html',
  styleUrls: ['./awarenessjourneystep1.component.scss']
})
export class AwarenessJourneyStep1Component implements OnInit {

  user : User;

  first:boolean = true;
  second:boolean = false;
  third:boolean = false;
  fourth:boolean = false;
  fifth:boolean = false;
  sixth:boolean = false;
  seventh:boolean = false;
  eight:boolean = false;
  nine:boolean = false;


  stepone: FormGroup;
  steptwo: FormGroup;
  stepthree: FormGroup;
  stepfour: FormGroup;
  stepfive: FormGroup;
  stepsix: FormGroup;
  stepseven: FormGroup;
  stepeight: FormGroup;
  stepnine: FormGroup;

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

    this.stepone = this.fb.group({
      soneone : ['', [Validators.required ]],  
      sonetwo : ['', [Validators.required ]], 
      sonethree : ['', [Validators.required ]], 
      sonefour : ['', [Validators.required ]], 
    });
    this.steptwo = this.fb.group({
      stwoone : ['', [Validators.required ]],  
      stwotwo : ['', [Validators.required ]], 
    });
    this.stepthree = this.fb.group({
      boardType : ['', [Validators.required ]],  
      boardName : ['', [Validators.required ]], 
    });
    this.stepfour = this.fb.group({
      limitation : ['', [Validators.required ]],  
      disability : ['', [Validators.required ]], 
    });
    this.stepfive = this.fb.group({  
      income : ['', [Validators.required ]],  
      financialassistance : ['', [Validators.required ]], 
      financialassistanceType : ['', [Validators.required ]], 
      support : ['', [Validators.required ]] 
    });
    this.stepsix = this.fb.group({
      ssixone : ['', [Validators.required ]],  
      ssixtwo : ['', [Validators.required ]], 
      ssixthree : ['', [Validators.required ]], 
      ssixfour : ['', [Validators.required ]], 
      ssixfive : ['', [Validators.required ]] 
    });
    this.stepseven = this.fb.group({
      ssevenone : ['', [Validators.required ]],  
      sseventwo : ['', [Validators.required ]], 
      sseventhree : ['', [Validators.required ]],  
    });
    this.stepeight = this.fb.group({
      seightone : ['', [Validators.required ]],  
      seighttwo : ['', [Validators.required ]], 
      seightthree : ['', [Validators.required ]],
      seightfour : ['', [Validators.required ]],  
    });
    this.stepnine = this.fb.group({
      snineone : ['', [Validators.required ]],  
      sninetwo : ['', [Validators.required ]], 
      sninethree : ['', [Validators.required ]],
      sninefour : ['', [Validators.required ]],  
    });
  }

  
  
  display(view: string): void {
    if (view ==='first') {
      this.first = false;
      this.second = true;
      this.third = false;
      this.fourth = false;
      this.fifth = false;
      this.sixth = false;
      this.seventh = false;
      this.eight = false;
      this.nine = false;
    }
    else if (view === 'second') {
      this.first = false;
      this.second = false;
      this.third = true;
      this.fourth = false;
      this.fifth = false;
      this.sixth = false;
      this.seventh = false;
      this.eight = false;
      this.nine = false;
    }
    else if (view === 'third') {
      this.first = false;
      this.second = false;
      this.third = false;
      this.fourth = true;
      this.fifth = false;
      this.sixth = false;
      this.seventh = false;
      this.eight = false;
      this.nine = false;
    }
    else if (view === 'fourth') {
      this.first = false;
      this.second = false;
      this.third = false;
      this.fourth = false;
      this.fifth = true;
      this.sixth = false;
      this.seventh = false;
      this.eight = false;
      this.nine = false;
    }
    else if (view === 'fifth') {
      this.first = false;
      this.second = false;
      this.third = false;
      this.fourth = false;
      this.fifth = false;
      this.sixth = true;
      this.seventh = false;
      this.eight = false;
      this.nine = false;
    }
    else if (view === 'sixth') {
      this.first = false;
      this.second = false;
      this.third = false;
      this.fourth = false;
      this.fifth = false;
      this.sixth = false;
      this.seventh = true;
      this.eight = false;
      this.nine = false;
    }
    else if (view === 'seventh') {
      this.first = false;
      this.second = false;
      this.third = false;
      this.fourth = false;
      this.fifth = false;
      this.sixth = false;
      this.seventh = false;
      this.eight = true;
      this.nine = false;
    }
    else if (view === 'eight') {
      this.first = false;
      this.second = false;
      this.third = false;
      this.fourth = false;
      this.fifth = false;
      this.sixth = false;
      this.seventh = false;
      this.eight = false;
      this.nine = true;
    }
  }

  onStepOne({ value, valid }: { value: StepOne, valid: boolean }) {
    this.display('first');
    console.log(value, valid);
    if(valid)
    {
      this.db.object(`stepone/${this.user.uid}`).set(value);
    }
  }
  onStepTwo({ value, valid }: { value: StepTwo, valid: boolean }) {
    this.display('second');
    console.log(value, valid);
    if(valid)
    {
      this.db.object(`steptwo/${this.user.uid}`).set(value);
    }
  }
  onStepThree({ value, valid }: { value: StepThree, valid: boolean }) {
    this.display('third');
    console.log(value, valid);
    if(valid)
    {
      this.db.object(`stepthree/${this.user.uid}`).set(value);
    }
  }
  onStepFour({ value, valid }: { value: StepFour, valid: boolean }) {
    this.display('fourth');
    console.log(value, valid);
    if(valid)
    {
      this.db.object(`stepfour/${this.user.uid}`).set(value);
    }
  }
  onStepFive({ value, valid }: { value: StepFive, valid: boolean }) {
    this.display('fifth');
    console.log(value, valid);
    if(valid)
    {
      this.db.object(`stepfive/${this.user.uid}`).set(value);
    }
  }
  onStepSix({ value, valid }: { value: StepSix, valid: boolean }) {
    this.display('sixth');
    console.log(value, valid);
    if(valid)
    {
      this.db.object(`stepsix/${this.user.uid}`).set(value);
    }
  }
  onStepSeven({ value, valid }: { value: StepSeven, valid: boolean }) {
    this.display('seventh');
    console.log(value, valid);
    if(valid)
    {
      this.db.object(`stepseven/${this.user.uid}`).set(value);
    }
  }
  onStepEight({ value, valid }: { value: StepEight, valid: boolean }) {
    this.display('eight');
    console.log(value, valid);
    if(valid)
    {
      this.db.object(`stepeight/${this.user.uid}`).set(value);
    }
  }
  onStepNine({ value, valid }: { value: StepNine, valid: boolean }) {

    console.log(value, valid);
    if(valid)
    {
      this.db.object(`stepnine/${this.user.uid}`).set(value);
      this.router.navigate(['/dashboard', {outlets : {dashboard:'profile'}}]);
    }
  }
}
