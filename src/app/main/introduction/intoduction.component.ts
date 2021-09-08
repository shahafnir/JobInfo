import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-intoduction',
  templateUrl: './intoduction.component.html',
  styleUrls: ['./intoduction.component.scss'],
})
export class IntoductionComponent {
  showToTopBtn: boolean;

  @HostListener('window:scroll')
  onScroll() {
    const yPosition = window.pageYOffset;
    if (yPosition >= 295) {
      this.showToTopBtn = true;
    } else {
      this.showToTopBtn = false;
    }
  }
}
