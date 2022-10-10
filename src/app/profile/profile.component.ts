import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  data5:any;
  constructor(   
    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit(): void {

  this.route.queryParams.subscribe((params)=>{
  console.log(params);
  this.data5=JSON.parse(params['data']);
})

  }


  // userData:any={};
  // getData(data:NgForm){
  //   console.warn(data)
  //   this.userData=data

  // }

}
