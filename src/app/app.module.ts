import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavMenuComponent } from './header/nav-menu/nav-menu.component';
import { MainComponent } from './main/main.component';
import { SearchJobComponent } from './main/job-search/job-search.component';
import { SocialNetworksComponent } from './social-networks/social-networks.component';
import { InformationForCandidatesComponent } from './main/nav-boxes/information-for-candidates/information-for-candidates.component';
import { IntoductionComponent } from './main/introduction/intoduction.component';
import { SalariesTablesComponent } from './main/nav-boxes/salaries-tables/salaries-tables.component';
import { CompaniesCarouselComponent } from './main/companies-carousel/companies-carousel.component';
import { EmployersRegistrationComponent } from './main/employers-registration/employers-registration.component';
import { JobsByCategoryComponent } from './main/jobs-by-category/jobs-by-category.component';
import { JobinfoInfoComponent } from './main/jobinfo-info/jobinfo-info.component';
import { FooterComponent } from './footer/footer.component.';
import { SendResumeComponent } from './send-resume/send-resume.component';
import { NavBoxesComponent } from './main/nav-boxes/nav-boxes.component';
import { LinkedinBannerComponent } from './main/nav-boxes/linkedin-banner/linkedin-banner.component';
import { SeniorsComponent } from './main/nav-boxes/seniors/seniors.component';
import { PersonalAppealComponent } from './main/nav-boxes/personal-appeal/personal-appeal.component';
import { NavCirclesComponent } from './main/nav-circles/nav-circles.component';
import { ResumeInstructionsComponent } from './main/nav-circles/resume-instructions/resume-instructions.component';
import { JobFindInstructionsComponent } from "./main/nav-circles/job-find-instructions/job-find-instructions.component";
import { RecruitersComponent } from './main/nav-circles/recruiters/recruiters.component';
import { SocialResponsibilityComponent } from './main/social-responsibility/social-responsibility.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavMenuComponent,
    MainComponent,
    IntoductionComponent,
    SearchJobComponent,
    SocialNetworksComponent,
    NavBoxesComponent,
    InformationForCandidatesComponent,
    SeniorsComponent,
    SalariesTablesComponent,
    PersonalAppealComponent,
    LinkedinBannerComponent,
    CompaniesCarouselComponent,
    EmployersRegistrationComponent,
    JobsByCategoryComponent,
    JobinfoInfoComponent,
    FooterComponent,
    SendResumeComponent,
    NavCirclesComponent,
    RecruitersComponent,
    ResumeInstructionsComponent,
    JobFindInstructionsComponent,
    SocialResponsibilityComponent
  ],
  imports: [BrowserModule, CommonModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
