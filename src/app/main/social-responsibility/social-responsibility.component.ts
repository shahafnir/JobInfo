import { Component } from '@angular/core';

@Component({
  selector: 'app-social-responsibility',
  templateUrl: 'social-responsibility.component.html',
  styleUrls: ['social-responsibility.component.scss'],
})
export class SocialResponsibilityComponent {
  replaceArrow(arrow: HTMLElement) {
    const arrowClasses = arrow.classList;
    if (!arrowClasses.contains('orange')) {
      arrowClasses.add('orange');
    } else {
      arrowClasses.remove('orange');
    }
  }
}
