import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   show=false
  
  
  constructor() { }

  ngOnInit(): void {

}
productlist=['p1','p2','p3']

getEvent(val:string){

  console.warn(val)
  alert(val)
}

}
