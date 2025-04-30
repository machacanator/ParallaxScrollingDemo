import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'landing-page',
  imports: [CommonModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  scrollCounter: number
  @ViewChild('pageContainer') webPageContainer!: ElementRef;

  constructor() {
    this.scrollCounter = 0;
    console.log("HA ENTRADO EN EL LANDING PAGE")
  }

  ngAfterViewInit() {
    this.webPageContainer.nativeElement.addEventListener('wheel', (event: WheelEvent)=> {
      if(event.deltaY < 0) {
        this.scrollCounter++;
      } else if (event.deltaY > 0 && this.scrollCounter > 0) {
        this.scrollCounter--;
      }
      console.log(this.scrollCounter) 
    });
  }

}
