import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss']
})
export class PortalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.style.backgroundImage = "url('assets/img/bg.png')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundSize = "cover";
  }

}
