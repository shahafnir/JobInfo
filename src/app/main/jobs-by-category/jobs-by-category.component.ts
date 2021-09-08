import { Component } from '@angular/core';

@Component({
  selector: 'app-jobs-by-category',
  templateUrl: 'jobs-by-category.component.html',
  styleUrls: ['jobs-by-category.component.scss'],
})
export class JobsByCategoryComponent {
  jobsCategories = {
  swIsOpen: false,
  internetIsOpen: false,
  hardwareIsOpen: false,
  infrastructureIsOpen: false,
  seniorIsOpen: false
  }
}
