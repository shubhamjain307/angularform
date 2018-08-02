import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import {Router,RouterModule,Routes} from '@angular/router';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent implements OnInit {

  editback:object;
  

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
    if(localStorage.getItem("data")!=null)
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
    

  }
  storeValue(){
    localStorage.setItem("data",JSON.stringify(this.myFormGroup.value));
   this.route.navigate(['/showdetail']);
    console.log(this.myFormGroup.value);
  }
  myFormGroup: FormGroup;
  check:boolean=false;

  constructor(private route:Router) { 

    this.myFormGroup=new FormGroup({
    fname:new FormControl('',[
      Validators.required,
      Validators.pattern("[a-zA-Z]+")
    ]),
    lname:new FormControl('',[
      Validators.required,
      Validators.pattern("[a-zA-Z]+$")
    ]),
    gender:new FormControl('',[
      Validators.required,
      Validators.pattern("(M)|(m)|(F)|(f)")
    ]),
    contactNo:new FormControl('',[
      Validators.required,
      Validators.min(10),
      Validators.max(10),
      // Validators.max(10),
      Validators.pattern("[0-9]+")
    ]),
    password:new FormControl('',[
      Validators.required,
      Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])")
    ]),
    // (?=.*[~`!@#$%^&*()_-{}<>,./?:;'+=])(?=.{8,20})
    confirmPassword:new FormControl('',[Validators.required]),

    empId:new FormControl('',[Validators.required,
    Validators.min(4),
    Validators.max(4),
    Validators.pattern("[0-9]+")
  ])
  })
}
}
  
 


