import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iot',
  templateUrl: './iot.component.html',
  styleUrls: ['./iot.component.css']
})
export class IotComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title="gadgeon";
  btnclick(){
    alert("hello from "+this.title);
  }

}
