import { Component, HostListener } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  navManuOpen = false;
  navManuToggleButton = new Subject<boolean>();
  lastScrollTop = 0;
  scrollUp = false;
  staticHeader = true;

 @HostListener('window:scroll')
 onScroll(){
  const yPosition = window.pageYOffset;

  if (yPosition > 60) {
    this.staticHeader = false;
    if (yPosition > this.lastScrollTop) {
      this.scrollUp = false;
    } else {
      this.scrollUp = true;
    }
  } else {
    this.staticHeader = true;
  }

  this.lastScrollTop = yPosition;
 }

  onNavMenuButtonClick() {
    this.navManuOpen = !this.navManuOpen;
    this.navManuToggleButton.next(this.navManuOpen);
  }
}
