import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import {Router,RouterModule,Routes} from '@angular/router';
import {RecordsService} from '../records.service';
import {Services} from '../services';
//import { RecordsService } from '../records.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent implements OnInit {
  

  editback;
  data;

  checkPassword(){
    if(this.myFormGroup.value.password !== this.myFormGroup.value.confirmPassword)
    {
       this.check=false;
       

    }
    else{
      this.check=true;
    }
  }
 
 
  ngOnInit() {
   /* if(localStorage.getItem("data")!=null)
    {
         var editback=JSON.parse(localStorage.getItem("data"));
         
        
        this.myFormGroup.patchValue({
           fname:editback.fname,
           lname:editback.lname,
           gender:editback.gender,
           contactNo:editback.contactNo,
           password:editback.password,
           empId:editback.empId,


         });
    } 
    */
    
   if(this.records.getData()!=null){

      this.editback=JSON.parse(this.records.getData());
     this.myFormGroup.patchValue({
      fname:this.editback.fname,
      lname:this.editback.lname,
      gender:this.editback.gender,
      contactNo:this.editback.contactNo,
      password:this.editback.password,
      empId:this.editback.empId,


    });


   }


  }
  
  myFormGroup: FormGroup;
  check:boolean=false;

  constructor(private route:Router,private records:RecordsService,private services:Services) { 

    this.myFormGroup=new FormGroup({
    fname:new FormControl('',[
      Validators.required,
        Validators.pattern("[a-zA-Z ]+")]), 
    lname:new FormControl('',[
      Validators.required,
      Validators.pattern("[a-zA-Z ]*")
      ]),
    gender:new FormControl('',[
      Validators.required,
      Validators.pattern("(M)|(m)|(F)|(f)")
    ]),
    contactNo:new FormControl('',[
      Validators.required,
            Validators.maxLength(10),
            Validators.pattern("[0-9]+")
           
          ]),
    password:new FormControl('',[
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(16),
      Validators.pattern('((?=.*[0-9])(?=.*[a-z])(?=.*[$@$!%*?&()_+={};;"|,.<>]).{0,16})')]),
     
    // (?=.*[~`!@#$%^&*()_-{}<>,./?:;'+=])(?=.{8,20})
    confirmPassword:new FormControl('',[
      Validators.required,
    
      Validators.maxLength(16),
      Validators.pattern('((?=.*[0-9])(?=.*[a-z])(?=.*[$@$!%*?&()_+={};;"|,.<>]).{0,16})')]),

    empId:new FormControl('',[
      Validators.required,
    Validators.min(4),
    Validators.max(4),
  
  ])
  })
}
storeValue(){
  // localStorage.setItem("data",JSON.stringify(this.myFormGroup.value));

  // this.services=this.myFormGroup.value;
   //this.records.setData(this.items);
    this.data = JSON.stringify(this.myFormGroup.value); 
    this.records.setData(this.data);

  this.route.navigate(['/showdetail']);
   console.log(this.myFormGroup.value);
  
 }
}
  
 


