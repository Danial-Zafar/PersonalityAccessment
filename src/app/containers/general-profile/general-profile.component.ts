import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {GeneralProfile} from './general-profile.interface';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { User } from 'firebase';

@Component({
  selector: 'app-general-profile',
  templateUrl: './general-profile.component.html',
  styleUrls: ['./general-profile.component.scss']
})
export class GeneralProfileComponent implements OnInit {

  generalprofile: FormGroup;
  user : User;
  constructor(private fb: FormBuilder,
    public auth: AngularFireAuth,
    private db: AngularFireDatabase,
    private router: Router
    ) { }

  ngOnInit(): void {
    document.body.style.backgroundImage = "url('assets/img/bg.png')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundSize = "cover";
    this.auth.currentUser.then((user) => {
      this.user = user;
      console.log(user);
    }).catch((error) => {
      console.error('error', error);
    });
    this.generalprofile = this.fb.group({
      name: ['', [Validators.required ]],
      image: ['', [Validators.required ]],
      gender: ['', [Validators.required ]],
      nationality: ['', [Validators.required ]],
      cnic:['', [Validators.required ]],
      dob: ['', [Validators.required ]],
      fname: ['', [Validators.required ]],
      fstatus: ['', [Validators.required ]],
      fprofession: ['', [Validators.required ]],
      fincome: ['', [Validators.required ]],
      mname: ['', [Validators.required ]],
      mstatus: ['', [Validators.required ]],
      mprofession: ['', [Validators.required ]],
      mincome: ['', [Validators.required ]],
      religion: ['', [Validators.required ]],
      area: ['', [Validators.required ]],
      mnumber: ['', [Validators.required ]],
      address: ['', [Validators.required ]],
      board: ['', [Validators.required ]],
      subject: ['', [Validators.required ]],
    });

  }
  onSubmit({ value, valid }: { value: GeneralProfile, valid: boolean }) {
    
    console.log(value, valid);
    if (valid) {
      value['isFilled'] = true;
      this.db.object(`users/${this.user.uid}`).update(value);
      this.router.navigate(['/dashboard', { outlets: { dashboard: 'profile' } }]);
    }
  }

}
