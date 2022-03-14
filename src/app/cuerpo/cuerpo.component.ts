import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

import { ViewportScroller } from '@angular/common';

import { BtnAnimation } from './classes/animation';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css'],
})
export class CuerpoComponent implements OnInit {
  mailForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', Validators.required],
    message: ['', Validators.required],
  });

  lateralBarValue: string = '';
  init!: HTMLElement;
  quienSoy!: HTMLElement;
  habilidades!: HTMLElement;
  experiencia!: HTMLElement;
  portfolio!: HTMLElement;
  form!: HTMLElement;
  elementHeights: number[] = [];
  scrollHeights: number[] = [];
  scrollIndex: number = 0;
  scrollActualValues: number[] = [];
  scrollActualValue: number = 0;
  timeStart: number = 0;
  timeOut!: ReturnType<typeof setTimeout>;
  mailInput: boolean = false;
  btnAnimation = new BtnAnimation();

  constructor(
    private viewportScroller: ViewportScroller,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.init = document.getElementById('init')!;
    this.quienSoy = document.getElementById('quienSoy')!;
    this.habilidades = document.getElementById('habilidades')!;
    this.experiencia = document.getElementById('experiencia')!;
    this.portfolio = document.getElementById('portfolio')!;
    this.form = document.getElementById('form')!;
    this.elementHeights = [
      0,
      this.init.scrollHeight,
      this.quienSoy.scrollHeight,
      this.habilidades.scrollHeight,
      this.experiencia.scrollHeight,
      this.portfolio.scrollHeight,
      this.form.scrollHeight,
    ];

    let height = 0;
    for (let element of this.elementHeights) {
      height += element;
      this.scrollHeights.push(height);
    }

    //defino el scrollIndex
    for (let height of this.scrollHeights) {
      if (height > 0) {
        if (window.scrollY > height * 0.8) {
          this.scrollIndex++;
        } else {
          break;
        }
      }
    }

    this.btnAnimation.addStyle();
  }

  @HostListener('mousewheel', ['$event'])
  onMouseWheel = (e: WheelEvent) => {
    let scroll = e.deltaY;

    clearTimeout(this.timeOut);

    this.timeOut = setTimeout(() => {
      this.prepareIndexToScroll(scroll);
    }, 10);
  };

  touchStart: number = 0;
  @HostListener('touchstart', ['$event'])
  onTouchStart = (e: TouchEvent | any) => {
    if (
      e.path[4].id === 'contacto' ||
      e.path[5].id === 'contacto' ||
      e.path[3].id === 'contacto'
    ) {
      return;
    }
    this.timeStart = e.timeStamp;
    this.touchStart = e.touches[0].clientY;
  };

  @HostListener('touchend', ['$event'])
  onTouchEnd = (e: TouchEvent | any) => {
    if (
      e.path[4].id === 'contacto' ||
      e.path[5].id === 'contacto' ||
      e.path[3].id === 'contacto'
    ) {
      return;
    }

    let scroll = this.touchStart - e.changedTouches[0].clientY;
    let scrollVelocity = scroll / (e.timeStamp - this.timeStart);

    if (Math.abs(scrollVelocity) > 0.2) {
      this.mailInput = false;
      this.prepareIndexToScroll(scroll);
    }
  };

  prepareIndexToScroll(scroll: number) {
    this.scrollIndex = 0;

    for (let height of this.scrollHeights) {
      if (height > 0) {
        if (window.scrollY > height) {
          this.scrollIndex++;
        } else {
          break;
        }
      }
    }

    if (scroll > 0) {
      this.scrollIndex++;
      if (this.scrollIndex >= this.elementHeights.length - 2) {
        this.scrollIndex = this.elementHeights.length - 2;
      }
    }

    if (this.scrollIndex < 0) {
      this.scrollIndex = 0;
    }

    this.scroll();
  }

  scroll(lateralBarValue?: string, mailInput?: boolean) {
    if (
      mailInput &&
      (window.visualViewport.width < 1024 || window.visualViewport.height < 800)
    ) {
      this.mailInput = true;
      return;
    }

    if (lateralBarValue) {
      switch (lateralBarValue) {
        case 'init':
          this.scrollIndex = 0;

          break;
        case 'Quien soy':
          this.scrollIndex = 1;

          break;
        case 'Habilidades':
          this.scrollIndex = 2;

          break;
        case 'Experiencia':
          this.scrollIndex = 3;

          break;
        case 'Portfolio':
          this.scrollIndex = 4;

          break;
        case 'Contacto':
          this.scrollIndex = 5;
          break;
        default:
          break;
      }
    }
    if (this.mailInput === true) {
      this.scrollIndex = 5; //poner el index de Contacto
    }

    setTimeout(() => {
      let scroll = 0;

      for (let i = 0; i <= this.scrollIndex; i++) {
        scroll = this.scrollHeights[i];
      }

      this.viewportScroller.scrollToPosition([0, scroll]);
    }, 100);
  }

  onSubmit() {}
}
