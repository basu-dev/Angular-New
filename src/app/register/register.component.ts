import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 public registerForm:FormGroup;
  submitted:Boolean=false;
  success:Boolean=false;
registerData:Object;

@Output() public event=new EventEmitter();

  constructor(private formBuilder:FormBuilder ,private toastr:ToastrService) {
    this.registerForm=this.formBuilder.group({
      userName:["",Validators.required],
      firstName:["",Validators.required],
      lastName:["",Validators.required],
    })
   }
Submit(){

  this.submitted=true;
  if(this.registerForm.invalid){
    return this.registerForm.errors;
  }
  else{
    this.success=true;
    this.toastr.success("User Registered Successfully!!","Angular APP");
    this.event.emit(this.registerForm.value);
  }
}
  ngOnInit() {
  }

}
