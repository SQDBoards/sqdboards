import { Injectable } from '@angular/core';
import anime from 'animejs';

@Injectable({
  providedIn: 'root'
})
export class AnimateService {

  constructor() {};

  animateOpenButton: any;
  animateBg: any;
  animateCloseButton: any;
  animateText: any;
  animateLines: any;

  initAnimations() {
    this.animateOpenButton = anime({
      targets: '#openMenu',
      rotate: ['0deg', '360deg'],
      duration: 650,
      easing: 'cubicBezier(0.76, 0, 0.24, 1)',
      autoplay: false
    });
    this.animateBg = anime({
      targets: '#dropdownMenu',
      height: ['0px', '100%'],
      duration: 550,
      easing: 'cubicBezier(0.76, 0, 0.24, 1)',
      begin: function() {
        if (document.getElementById('dropdownMenu')?.classList.contains('hidden')) {
          document.getElementById('dropdownMenu')?.classList.remove('hidden');
          document.getElementById('dropdownMenu')?.classList.add('opened');
        }
      },
      autoplay: false
    });
    this.animateCloseButton = anime({
      targets: '#closeMenu',
      rotate: ['0deg', '360deg'],
      opacity: [0, 1],
      duration: 950,
      easing: 'cubicBezier(0.76, 0, 0.24, 1)',
      delay: 300,
      autoplay: false
    });
    this.animateText = anime({
      targets: '.menu a',
      translateX: ['-100%', '0%'],
      duration: 650,
      delay: anime.stagger(150, {start: 150}),
      easing: 'cubicBezier(0.76, 0, 0.24, 1)',
      autoplay: false
    });
    this.animateLines = anime({
      targets: '.menu hr',
      width: ['0', '99%'],
      duration: 650,
      delay: anime.stagger(150, {start: 200}),
      easing: 'cubicBezier(0.76, 0, 0.24, 1)',
      autoplay: false
    });
  }

  openDropdown() {
    this.animateOpenButton.restart();
    this.animateBg.restart();
    this.animateCloseButton.restart();
    this.animateText.restart();
    this.animateLines.restart();
  };

  closeDropdown() {
    if (document.getElementById('dropdownMenu')?.classList.contains('opened')) {
      document.getElementById('dropdownMenu')?.classList.remove('opened');
      document.getElementById('dropdownMenu')?.classList.add('hidden');
    }
  };

}
