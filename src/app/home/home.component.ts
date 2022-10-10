import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }         

  // displayVal='';
  displayVal:any=[]
  getValue(val:string){

     console.warn(val)
    this.displayVal.push(val);
    console.log(this.displayVal); 
  }
  }


