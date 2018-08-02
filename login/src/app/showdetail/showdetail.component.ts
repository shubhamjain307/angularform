import { Component, OnInit } from '@angular/core';
import {Router,RouterModule,Routes} from '@angular/router';
import { RecordsService } from '../records.service';

@Component({
  selector: 'app-showdetail',
  templateUrl: './showdetail.component.html',
  styleUrls: ['./showdetail.component.css']
})
export class ShowdetailComponent implements OnInit {
  
  value;
  show:string="password";
   
  constructor(private route:Router,private data:RecordsService) {
    //this.Data = JSON.parse(localStorage.getItem("data"));
    this.value=JSON.parse(this.data.getData());
      
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
