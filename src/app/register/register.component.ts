import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup,FormControl } from '@angular/forms';
import { Router,ActivatedRoute} from '@angular/router';
 
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  
})
export class RegisterComponent implements OnInit {

  form:any;

  constructor(

    private router: Router,
    private route: ActivatedRoute
  ){

    this.form=new FormGroup(
      {
      fname:new FormControl(""),
      lname:new FormControl(""),
      email:new FormControl(""),
      Mob:new FormControl(""),
      }
    )

    }

  ngOnInit(): void {
  }


  saveCall(){ 
    let data:any=this.form.value;
    this.router.navigate(['./profile'],{
      queryParams:{data:JSON.stringify(data)}
      
        })
  } 

  

  // userData:any={};
  // getData(data:NgForm){
  //   console.warn(data)
  //   this.userData=data

  // }

}
