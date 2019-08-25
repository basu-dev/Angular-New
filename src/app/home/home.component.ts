import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  btnText=false;
  users:Object;
  form :FormGroup;
  submitted:Boolean =false;
  success:Boolean = false;

  constructor(private data:DataService,private formbuilder:FormBuilder){
     this.form = this.formbuilder.group({
       userName:["",Validators.required],
       firstName:["",Validators.required],
       lastName:["",Validators.required],
     })
  };


  ngOnInit() {
    this.data.getUsers().subscribe(data=>{
      this.users= data
      console.log(data)
    }
      );
  }
public Submit(){
 this.btnText=true;
 this.submitted = true;
 if(this.form.valid){
   this.success=true;
 }
 else{
   return this.form.errors;
 }
}
}
