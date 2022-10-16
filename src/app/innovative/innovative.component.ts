import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-innovative',
  templateUrl: './innovative.component.html',
  styleUrls: ['./innovative.component.css']
})
export class InnovativeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
    title="gadgeon";
  btnclick(){
    alert("hello from "+this.title);
  
  }
}
