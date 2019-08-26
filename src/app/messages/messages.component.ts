import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
messages:Object;
  constructor(private data:DataService) { }
  clicked:Boolean= false;
  ngOnInit() {

  }
  message(){
    if(this.clicked){
      this.messages=null,
      this.clicked=false;

    }
    else{
      this.clicked=true;
    this.data.getMessages().subscribe(data=>
    this.messages=data  );
    }
  }

}
