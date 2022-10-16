import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { myservice } from '../service/info-service';

@Component({
  selector: 'app-agile',
  templateUrl: './agile.component.html',
  styleUrls: ['./agile.component.css']
})
export class AgileComponent implements OnInit {

  constructor() { 
  }

  ngOnInit(): void {
  }
  title="gadgeon";
  btnclick(){
    alert("hello from "+this.title);
  }
  onbtnclick(){
    const service=new myservice();
    service.onclickbtn(this.title);
  }

}
