import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  name='Register';
  data='Neha & Gaurav';
  data1='about us';

  msg:string='';
  onclick(){
    this.msg='Successfully';
  }
}
