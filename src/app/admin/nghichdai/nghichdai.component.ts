import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nghichdai',
  templateUrl: './nghichdai.component.html',
  styleUrls: ['./nghichdai.component.css']
})
export class NghichdaiComponent implements OnInit {

  condition1 = true;
  condition2 = false;
  condition3 = false;

  constructor() { }

  ngOnInit(): void {
  
  }

  mouseEnter(mode: string) {
    if (mode === 'button1') {
      this.condition1 = false;
      this.condition2 = true;
    } else if (mode === 'button2') {
      this.condition2 = false;
      this.condition3 = true;
    } if (mode === 'button3') {
      this.condition3 = false;
      this.condition1 = true;
    }
  }

  onClickOk() {
    alert("Uk đúng vậy :D :D")
  }

}
