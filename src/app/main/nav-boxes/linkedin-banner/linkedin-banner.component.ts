import { Component } from '@angular/core';

@Component({
  selector: 'app-linkedin-banner',
  template: ` <div class="linkedin">
    <div class="follow-box">
      <div class="follow-button">Follow</div>
      <div class="in">in</div>
      <div class="followers-count">7,473</div>
    </div>
    <a href="">
      <img
        src="http://d2ichgn6omvugs.cloudfront.net/images/19762365/boom.png"
        alt=""
      />
    </a>
    <div class="share-button">
      <img src="../../../assets/images/linkedin.svg" alt="" />
      <span class="text">Share</span>
    </div>
  </div>`,
  styleUrls: ['linkedin-banner.component.scss'],
})
export class LinkedinBannerComponent {}
