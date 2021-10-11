import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  public currentCount = -12;

  public incrementCounter() {
    this.currentCount+= Math.floor(Math.random() *10);
  }
}
