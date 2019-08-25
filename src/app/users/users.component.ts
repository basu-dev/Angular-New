import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
users:Object;
clicked:Boolean =false;
  constructor(private data:DataService) { }
public getUsers(){
  if(this.clicked){
    this.users=[];
    this.clicked=false;
  }
  else{
    this.clicked=true;
    this.data.getUsers().subscribe(data=>
      this.users=data);
  }

};
  ngOnInit() {

}

}
