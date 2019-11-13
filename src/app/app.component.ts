import { Component, ElementRef, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter: number = 0;
  counterSum: number = 0;


  @HostListener('document:add-counter', ['$event'])
  onAddCounter(event){
    console.log('Counter passed: ',(<any>event).detail);
    const increaser:number = parseInt((<any>event).detail.increaser);
    this.counterSum = this.counterSum + increaser;

  }

  onClickCounter(){
    const increaser:number = 1;
    const event = new CustomEvent('add-counter', {
      detail: {
        increaser
      }
    })
    document.dispatchEvent(event);
  }



}
