import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'fill-with-dots';
  dots = Array.from(Array(160).keys())
  colors = [
    'red',
    'green',
    'blue',
    'pink',
    'purple',
    'orange',
    'yellow',
    'cyan',
    'grey',
    'magenta',
  ];
  randomColorIndex = 0;
  counter = 25;
  myinterval: any;
  isGameStarted = false;

  changeStyle(dot: any) {
    this.randomColorIndex = Math.floor(Math.random() * this.colors.length);
    dot.classList.add(this.colors[this.randomColorIndex]);
    this.checkGameStatus();
  }

  startTimer() {
    this.isGameStarted = true;
    this.myinterval = setInterval(() => {
      if (this.counter > 0) {
        this.counter--;
      }
    }, 1000);
  }

  checkGameStatus() {
    if (!this.isGameStarted){
      this.startTimer();
    }
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
      clearInterval(this.myinterval);
  }
}
