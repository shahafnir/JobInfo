import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employers-registration',
  templateUrl: 'employers-registration.component.html',
  styleUrls: ['employers-registration.component.scss'],
})
export class EmployersRegistrationComponent implements OnInit {
  ngOnInit() {
    let backgroundImages = [
      "url('https://d2ichgn6omvugs.cloudfront.net/images/19762365/jobinfo_banner.jpg')",
      "url('https://d2ichgn6omvugs.cloudfront.net/images/19762365/jobinfobanner2.jpg')",
      "url('https://d2ichgn6omvugs.cloudfront.net/images/19762365/JobInfo_Banner_Tofes_%20fidbek_July2020-2%20copy.jpg')",
      "url('https://d2ichgn6omvugs.cloudfront.net/images/19762365/JobInfo_Banner_Tofes_%20fidbek_July2020-3%20copy.jpg')",
    ];

    let banners = document.getElementById('banners');
    let bgImageNumber = 0;
    banners.style.backgroundImage = backgroundImages[bgImageNumber];
    setInterval(frame, 10000);

    function frame() {
      if (bgImageNumber > 3) {
        bgImageNumber = 0;
      }
      bgImageNumber++;
      banners.style.backgroundImage = backgroundImages[bgImageNumber];
    }
  }
  onSubmit(f: NgForm) {}

  onCompanyNameChange(comanyName: any) {
    if (comanyName.length > 0) {
      document.getElementById('companyName').style.backgroundColor = '#1b4c74';
    } else {
      document.getElementById('companyName').style.backgroundColor =
        'transparent';
    }
  }

  onPhoneNumberChange(phoneNumber: any) {
    if (phoneNumber.length > 0) {
      document.getElementById('phoneNumber').style.backgroundColor = '#1b4c74';
    } else {
      document.getElementById('phoneNumber').style.backgroundColor =
        'transparent';
    }
  }

  onEmailChange(email: any) {
    if (email.length > 0) {
      document.getElementById('email').style.backgroundColor = '#1b4c74';
    } else {
      document.getElementById('email').style.backgroundColor = 'transparent';
    }
  }
}
