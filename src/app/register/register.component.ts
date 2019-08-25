import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm:FormGroup;
  submitted:Boolean=false;
  success:Boolean=false;
  registeredData:Object = null;

  constructor(private formBuilder:FormBuilder ) {
    this.registerForm=this.formBuilder.group({
      userName:["",Validators.required],
      firstName:["",Validators.required],
      lastName:["",Validators.required],
    })
   }
Submit(data){
  this.registeredData=data;
  this.submitted=true;
  if(this.registerForm.invalid){
    return this.registerForm.errors;
  }
  else{
    this.success=true;
  }
}
  ngOnInit() {
  }

}
