import { Injectable } from '@angular/core';
import { Services } from './services';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

    formdata
     
  constructor() { }

  getData(){
    return this.formdata;


  }
  setData(formdata){

    this.formdata= formdata;

  }

}
