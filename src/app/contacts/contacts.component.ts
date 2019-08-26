import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, EmailValidator } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  messageForm:FormGroup;
  success:Boolean = false;
  submitted:Boolean = false;

  constructor(private formBuilder:FormBuilder,private toastr:ToastrService) {
    this.messageForm = this.formBuilder.group({
        email:["",Validators.required],
        message:["",Validators.required],
    });


   };
   public Submit(){
     this.submitted=true;

     if(this.messageForm.invalid){
       return this.messageForm.errors;
     }
     else{
      this.toastr.info("Your Messgae Sent!","Angular App");
       this.success=true;
     }
   }
  ngOnInit() {
  }

}
