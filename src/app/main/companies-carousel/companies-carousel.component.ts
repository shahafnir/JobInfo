import { Component } from '@angular/core';

@Component({
  selector: 'app-companies-carousel',
  templateUrl: 'companies-carousel.component.html',
  styleUrls: ['companies-carousel.component.scss'],
})
export class CompaniesCarouselComponent {
  images = [
    '../../../assets/images/companies-carousel/JobInfo_StripLogos_1.png',
    '../../../assets/images/companies-carousel/JobInfo_StripLogos_2.png',
    '../../../assets/images/companies-carousel/JobInfo_StripLogos_3.png',
    '../../../assets/images/companies-carousel/JobInfo_StripLogos_4.png',
    '../../../assets/images/companies-carousel/JobInfo_StripLogos_5.png',
    '../../../assets/images/companies-carousel/JobInfo_StripLogos_6.png',
    '../../../assets/images/companies-carousel/JobInfo_StripLogos_7.png',
    '../../../assets/images/companies-carousel/JobInfo_StripLogosX3.png',
  ];

  ngAfterViewInit() {
    this.runCarouselAnimation();
  }

  runCarouselAnimation() {
    const initialXPosition = -400;
    let animatedElements = [];
    let elementsXPositions = [];

    for (let imageNumber = 0; imageNumber < 8; imageNumber++) {
      animatedElements.push(document.getElementById('img' + imageNumber));
      if (imageNumber < 7) {
        elementsXPositions.push(
          initialXPosition + initialXPosition * imageNumber
        );
      } else {
        elementsXPositions.push(initialXPosition * imageNumber - 600);
      }
    }

    let animationInterval = setInterval(frame, 11);

    function frame() {
      for (let imageNumber = 0; imageNumber < 8; imageNumber++) {
        elementsXPositions[imageNumber]++;
        animatedElements[imageNumber].style.right =
          elementsXPositions[imageNumber] + 'px';
        if (elementsXPositions[imageNumber] === 1248) {
          if (imageNumber === 0) {
            elementsXPositions[0] = elementsXPositions[7] - 400;
          } else if (imageNumber === 7) {
            elementsXPositions[7] = elementsXPositions[6] - 600;
          } else {
            elementsXPositions[imageNumber] =
              elementsXPositions[imageNumber - 1] - 400;
          }
        }
      }
    }
  }
}
