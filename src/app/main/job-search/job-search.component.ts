import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-job-search',
  templateUrl: 'job-search.component.html',
  styleUrls: ['job-search.component.scss'],
})
export class SearchJobComponent {
isSearchInputEmpty = true;

  onSubmit(form: NgForm) {

  }
}
