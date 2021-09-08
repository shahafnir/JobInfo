import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { HeaderComponent } from './../header.component';

@Component({
  selector: 'app-nav-menu',
  templateUrl: 'nav-menu.component.html',
  styleUrls: ['nav-menu.component.scss'],
})
export class NavMenuComponent implements OnInit {
  navMenuToggleButtonSubscription = new Subscription();
  isOpen = false;
  extendedCategoryList: HTMLElement;

  constructor(private headerComponent: HeaderComponent) {}
  ngOnInit() {
    this.navMenuToggleButtonSubscription = this.headerComponent.navManuToggleButton.subscribe(
      (navMenuOpen) => {
        this.isOpen = navMenuOpen;
        this.closeCategoryList();
      }
    );
  }

  highLightLabel(textLabel: HTMLElement) {
    textLabel.classList.add('high-light');
  }

  removeHighLightFromLabel(textLabel: HTMLElement) {
    textLabel.classList.remove('high-light');
  }

  openCategoryList(category: HTMLElement) {
    if (this.extendedCategoryList !== category) {
      this.closeCategoryList();
    }

    if (!category.classList.contains('open')) {
      category.classList.add('open');
      this.extendedCategoryList = category;
    } else {
      this.closeCategoryList();
    }
  }

  openCategoryListMobile(category: HTMLElement) {
    if (window.innerWidth >= 1024) {
      return;
    }

    this.openCategoryList(category);
  }

  openCategoryListDesktop(category: HTMLElement) {
    if (window.innerWidth < 1024) {
      return;
    }

    if(category !== this.extendedCategoryList) {
      this.openCategoryList(category);
    }
  }

  closeCategoryList() {
    if (this.extendedCategoryList) {
      const extendedCategoryClassList = this.extendedCategoryList.classList;

      if (extendedCategoryClassList.contains('open')) {
        extendedCategoryClassList.remove('open');
      }

      this.extendedCategoryList = null;
    }
  }
}
