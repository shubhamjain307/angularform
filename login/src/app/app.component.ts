import { Component } from '@angular/core';
import { FormControl , FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms'; 
import {Routes,RouterModule,Router} from '@angular/router';
import {RecordsService} from './records.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LOGIN';

  
    constructor (private route:Router,private firstservice:RecordsService){
      this.route.navigate(['']);


      
    } 
  

     
    }
  
 
  

