import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-salaries-tables',
  templateUrl: 'salaries-tables.component.html',
  styleUrls: ['salaries-tables.component.scss'],
})
export class SalariesTablesComponent {
  expandButton = '../../../assets/images/plus.svg';
  isExpand: boolean;

  expandContent() {
    this.expandButton =
      this.expandButton === '../../../assets/images/plus.svg'
        ? '../../../assets/images/minus.svg'
        : '../../../assets/images/plus.svg';

    this.isExpand = !this.isExpand;
  }
}
