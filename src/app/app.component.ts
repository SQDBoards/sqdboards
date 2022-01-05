import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import anime from 'animejs';

@Component({
  selector: 'root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './tailwind.css']
})
export class SQDBoardsMain implements AfterViewInit, OnInit {

  constructor (private route: ActivatedRoute){};

  cart: number = 0;
  lsCart = localStorage.getItem("cartItems");

  openDropdown() {
      anime({
        targets: '#openMenu',
        rotate: ['0deg', '360deg'],
        duration: 650,
        easing: 'cubicBezier(0.76, 0, 0.24, 1)',
      });
      anime({
        targets: '#dropdownMenu',
        height: ['0px', '100%'], //previous solution: document.documentElement.clientHeight.toString() + "px"
        duration: 550,
        easing: 'cubicBezier(0.76, 0, 0.24, 1)',
        begin: function() {
          if (document.getElementById('dropdownMenu')?.classList.contains('hidden')) {
            document.getElementById('dropdownMenu')?.classList.remove('hidden');
            document.getElementById('dropdownMenu')?.classList.add('opened');
          }
        },
      });
      anime({
        targets: '#closeMenu',
        rotate: ['0deg', '360deg'],
        opacity: [0, 1],
        duration: 950,
        easing: 'cubicBezier(0.76, 0, 0.24, 1)',
        delay: 100,
      });
      anime({
        targets: '.menu a',
        translateX: ['-100%', '0%'],
        duration: 650,
        delay: anime.stagger(150, {start: 150}),
        easing: 'cubicBezier(0.76, 0, 0.24, 1)',
      });
      anime({
        targets: '.menu hr',
        width: ['0', '99%'],
        duration: 650,
        delay: anime.stagger(150, {start: 200}),
        easing: 'cubicBezier(0.76, 0, 0.24, 1)',
      });
  };

  closeDropdown() {
    anime({
      targets: '#closeMenu',
      rotate: ['360deg', '0deg'],
      opacity: [1, 0],
      duration: 950,
      delay: 150,
      easing: 'cubicBezier(0.76, 0, 0.24, 1)',
      complete: function() {
        if (document.getElementById('closeMenu')?.classList.contains('opened')) {
          document.getElementById('closeMenu')?.classList.remove('opened');
          document.getElementById('closeMenu')?.classList.add('hidden');
        }
      },
    });
    anime({
      targets: '#dropdownMenu',
      height: [document.getElementById('dropdownMenu')?.offsetHeight,'0px'], // previous solution: document.documentElement.clientHeight.toString() + "px"
      duration: 550,
      easing: 'cubicBezier(0.76, 0, 0.24, 1)',
      delay: 640,
      complete: function() {
        if (document.getElementById('dropdownMenu')?.classList.contains('opened')) {
          document.getElementById('dropdownMenu')?.classList.remove('opened');
          document.getElementById('dropdownMenu')?.classList.add('hidden');
        }
      },
    });
    anime({
      targets: '.menu a',
      translateX: ['-100%', '0%'],
      duration: 650,
      delay: anime.stagger(150, {start: 150}),
      easing: 'cubicBezier(0.76, 0, 0.24, 1)',
      direction: 'reverse',
    });
    anime({
      targets: '.menu hr',
      width: ['0', '99%'],
      duration: 650,
      delay: anime.stagger(150, {start: 200}),
      easing: 'cubicBezier(0.76, 0, 0.24, 1)',
      direction: 'reverse',
    });
  }
  
  ngOnInit(): void {
    // An exmaple for myself on how to scaffold those link-provided params
    //
    // let product: number;
    // this.route.queryParams.subscribe((params) => {
    //   this.product = params['product'];
    // });
    if(this.lsCart) {
      this.cart = JSON.parse(this.lsCart);
    } else {
      this.cart = 0;
      localStorage.setItem("cartItems", JSON.stringify(this.cart));
    }
  }
    
  ngAfterViewInit(): void {
    /* Animations would probably go here */
  }
}
