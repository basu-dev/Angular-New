import { Component, OnInit } from '@angular/core';
import { RegisterComponent } from '../register/register.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
success:Boolean =false;
  constructor(private register:RegisterComponent){
     this.success= this.register.success;
  };
  ngOnInit() {
  }
}
