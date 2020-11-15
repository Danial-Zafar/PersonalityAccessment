import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  center = {lat: 33.6943753 , lng: 72.9677668};
  constructor() { }

  ngOnInit(): void {
  }

}
