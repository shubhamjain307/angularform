import { Component, OnInit } from '@angular/core';
import {Router,RouterModule,Routes} from '@angular/router';
@Component({
  selector: 'app-showdetail',
  templateUrl: './showdetail.component.html',
  styleUrls: ['./showdetail.component.css']
})
export class ShowdetailComponent implements OnInit {
  
  Data;
  show:string="password";
   
  constructor(private route:Router) {
    this.Data = JSON.parse(localStorage.getItem("data"));
   
    }

   editform(){
      this.route.navigate(['/editdetail']);


   }
   passwordshow(){
    console.log("hiii")

     if(this.show=="password"){

      this.show="text";

     }
     else
     {
       this.show="password";
     }
  }

  ngOnInit() {



  }

}
