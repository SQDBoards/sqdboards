import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


import anime from 'animejs';
import { debounceTime, Observable, of } from 'rxjs';
import { NotationService } from 'src/app/services/notation.service';
import Typed from 'typed.js';
import { pcb } from './models/pcb.model';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.css', '../../tailwind.css']
})
export class BuilderComponent implements OnInit, AfterViewInit {

  constructor(private notation: NotationService,
              private formbuilder: FormBuilder) {};

  // mock. remove before prod!
  mockPcb: pcb[] = [
    {
      _id: "1",
      features: {
        hotSwappable: true,
        rgb: "Per-Key RGB on top",
        usbType: "Type-C",
        firmware: "VIA falshing support"
      },
      images: ["https://cdn.shopify.com/s/files/1/1473/3902/products/lADPDgtYyLOr33vNB9DNB9A_2000_2000.jpg?v=1631086544", "https://cdn.shopify.com/s/files/1/1473/3902/products/lADPDhmOw0bF9mDNB9DNB9A_2000_2000.jpg?v=1631086544", "https://cdn.shopify.com/s/files/1/1473/3902/products/lADPDgtYyLO4TzrNB9DNB9A_2000_2000.jpg?v=1631086689", "https://cdn.shopify.com/s/files/1/1473/3902/products/4_02446b32-7a59-443a-9db5-55a16cdc6221.jpg?v=1570118680", "https://cdn.shopify.com/s/files/1/1473/3902/products/5_aabaed50-9b02-44ce-950b-6d393022699b.jpg?v=1570118680"],
      size: "65%",
      title: "KBD67 MKII RGB V3 Hot-swap PCB"
    },
    {
      _id: "2",
      features: {
        hotSwappable: true,
        rgb: "Per-Key RGB on top",
        usbType: "Type-C",
        firmware: "VIA falshing support"
      },
      images: ["https://cdn.shopify.com/s/files/1/1473/3902/products/lADPDgtYyLOr33vNB9DNB9A_2000_2000.jpg?v=1631086544", "https://cdn.shopify.com/s/files/1/1473/3902/products/lADPDhmOw0bF9mDNB9DNB9A_2000_2000.jpg?v=1631086544", "https://cdn.shopify.com/s/files/1/1473/3902/products/lADPDgtYyLO4TzrNB9DNB9A_2000_2000.jpg?v=1631086689", "https://cdn.shopify.com/s/files/1/1473/3902/products/4_02446b32-7a59-443a-9db5-55a16cdc6221.jpg?v=1570118680", "https://cdn.shopify.com/s/files/1/1473/3902/products/5_aabaed50-9b02-44ce-950b-6d393022699b.jpg?v=1570118680"],
      size: "65%",
      title: "KBD67 MKII RGB V3 Hot-swap PCB"
    },
    {
      _id: "3",
      features: {
        hotSwappable: true,
        rgb: "Per-Key RGB on top",
        usbType: "Type-C",
        firmware: "VIA falshing support"
      },
      images: ["https://cdn.shopify.com/s/files/1/1473/3902/products/lADPDgtYyLOr33vNB9DNB9A_2000_2000.jpg?v=1631086544", "https://cdn.shopify.com/s/files/1/1473/3902/products/lADPDhmOw0bF9mDNB9DNB9A_2000_2000.jpg?v=1631086544", "https://cdn.shopify.com/s/files/1/1473/3902/products/lADPDgtYyLO4TzrNB9DNB9A_2000_2000.jpg?v=1631086689", "https://cdn.shopify.com/s/files/1/1473/3902/products/4_02446b32-7a59-443a-9db5-55a16cdc6221.jpg?v=1570118680", "https://cdn.shopify.com/s/files/1/1473/3902/products/5_aabaed50-9b02-44ce-950b-6d393022699b.jpg?v=1570118680"],
      size: "65%",
      title: "KBD67 MKII RGB V3 Hot-swap PCB"
    },
    {
      _id: "4",
      features: {
        hotSwappable: true,
        rgb: "Per-Key RGB on top",
        usbType: "Type-C",
        firmware: "VIA falshing support"
      },
      images: ["https://cdn.shopify.com/s/files/1/1473/3902/products/lADPDgtYyLOr33vNB9DNB9A_2000_2000.jpg?v=1631086544", "https://cdn.shopify.com/s/files/1/1473/3902/products/lADPDhmOw0bF9mDNB9DNB9A_2000_2000.jpg?v=1631086544", "https://cdn.shopify.com/s/files/1/1473/3902/products/lADPDgtYyLO4TzrNB9DNB9A_2000_2000.jpg?v=1631086689", "https://cdn.shopify.com/s/files/1/1473/3902/products/4_02446b32-7a59-443a-9db5-55a16cdc6221.jpg?v=1570118680", "https://cdn.shopify.com/s/files/1/1473/3902/products/5_aabaed50-9b02-44ce-950b-6d393022699b.jpg?v=1570118680"],
      size: "65%",
      title: "KBD67 MKII RGB V3 Hot-swap PCB"
    },
    {
      _id: "5",
      features: {
        hotSwappable: true,
        rgb: "Per-Key RGB on top",
        usbType: "Type-C",
        firmware: "VIA falshing support"
      },
      images: ["https://cdn.shopify.com/s/files/1/1473/3902/products/lADPDgtYyLOr33vNB9DNB9A_2000_2000.jpg?v=1631086544", "https://cdn.shopify.com/s/files/1/1473/3902/products/lADPDhmOw0bF9mDNB9DNB9A_2000_2000.jpg?v=1631086544", "https://cdn.shopify.com/s/files/1/1473/3902/products/lADPDgtYyLO4TzrNB9DNB9A_2000_2000.jpg?v=1631086689", "https://cdn.shopify.com/s/files/1/1473/3902/products/4_02446b32-7a59-443a-9db5-55a16cdc6221.jpg?v=1570118680", "https://cdn.shopify.com/s/files/1/1473/3902/products/5_aabaed50-9b02-44ce-950b-6d393022699b.jpg?v=1570118680"],
      size: "65%",
      title: "KBD67 MKII RGB V3 Hot-swap PCB"
    },
    {
      _id: "6",
      features: {
        hotSwappable: true,
        rgb: "Per-Key RGB on top",
        usbType: "Type-C",
        firmware: "VIA falshing support"
      },
      images: ["https://cdn.shopify.com/s/files/1/1473/3902/products/lADPDgtYyLOr33vNB9DNB9A_2000_2000.jpg?v=1631086544", "https://cdn.shopify.com/s/files/1/1473/3902/products/lADPDhmOw0bF9mDNB9DNB9A_2000_2000.jpg?v=1631086544", "https://cdn.shopify.com/s/files/1/1473/3902/products/lADPDgtYyLO4TzrNB9DNB9A_2000_2000.jpg?v=1631086689", "https://cdn.shopify.com/s/files/1/1473/3902/products/4_02446b32-7a59-443a-9db5-55a16cdc6221.jpg?v=1570118680", "https://cdn.shopify.com/s/files/1/1473/3902/products/5_aabaed50-9b02-44ce-950b-6d393022699b.jpg?v=1570118680"],
      size: "65%",
      title: "KBD67 MKII RGB V3 Hot-swap PCB"
    }
  ];

  mockReturnPcbs(size: string): Observable<pcb[]> {
    let tmp: pcb[] = [];
    for (let i = 0; i < this.mockPcb.length; i++) {
      if (this.mockPcb[i].size === size) tmp.push(this.mockPcb[i]);
    }
    return of(tmp);
  }

  showFullImg(fIndex: number, sIndex: number) {
    console.log('looking for element:', "pcb"+fIndex.toString()+"/"+sIndex.toString());
    const showElement = document.getElementById("pcb"+fIndex.toString()+"/"+sIndex.toString());
    if (showElement) showElement.classList.remove("hidden");
  }
  hideFullImg(fIndex: number, sIndex: number) {
    console.log('looking for element:', "pcb"+fIndex.toString()+"/"+sIndex.toString());
    const showElement = document.getElementById("pcb"+fIndex.toString()+"/"+sIndex.toString());
    if (showElement) showElement.classList.add("hidden")
  }

  // step 1 - pcb size
  pcbSize: string = '';
  pcbs?: Observable<pcb[]>;
  pcbSizeGroup: FormGroup = this.formbuilder.group({
    pcbSize: [null, [
      Validators.required,
      Validators.pattern(RegExp("(40%)?(60%)?(65%)?(75%)?(80%)?(100%)?"))
    ]]
  });

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const typed = new Typed("#typed-size", {
      strings: ['It all starts with the size...<a class="notate" style="width: fit-content; margin: auto;">So pick yours:</a>'],
      typeSpeed: 35,
      showCursor: false,
      loop: false,
      onComplete: () => {
        this.notation.notate();
        anime({
          targets: '.animateIn',
          opacity: ['0', '1']
        }).restart();
      }
    });
    typed.start();

    this.pcbSizeGroup.valueChanges
      .pipe(debounceTime(950))
      .subscribe((data) => {
        this.pcbs = this.mockReturnPcbs(data.pcbSize);
      });
  }

}
