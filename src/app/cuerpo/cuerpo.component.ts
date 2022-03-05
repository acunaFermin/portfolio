import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css'],
})
export class CuerpoComponent implements OnInit {
  lateralBarValue: string = '';
  init!: HTMLElement;
  quienSoy!: HTMLElement;
  habilidades!: HTMLElement;
  experiencia!: HTMLElement;
  scrollHeights: number[] = [];

  constructor(private viewportScroller: ViewportScroller) {}

  ngOnInit(): void {
    this.init = document.getElementById('init')!;
    this.quienSoy = document.getElementById('quienSoy')!;
    this.habilidades = document.getElementById('habilidades')!;
    this.experiencia = document.getElementById('experiencia')!;
    this.scrollHeights = [
      0,
      this.init.scrollHeight,
      this.quienSoy.scrollHeight,
      this.habilidades.scrollHeight,
      this.experiencia.scrollHeight,
    ];
  }

  receptValue(lateralBarValue: string) {
    let scrollIndex = 0;

    switch (lateralBarValue) {
      case 'init':
        scrollIndex = 0;

        break;
      case 'Quien soy':
        scrollIndex = 1;

        break;
      case 'Habilidades':
        scrollIndex = 2;

        break;
      case 'Experiencia':
        scrollIndex = 3;

        break;
      case 'Contacto':
        scrollIndex = 4;
        break;
      default:
        break;
    }
    setTimeout(() => {
      let scroll = 0;

      for (let i = 0; i <= scrollIndex; i++) {
        scroll += this.scrollHeights[i];
      }

      this.viewportScroller.scrollToPosition([0, scroll]);
    }, 100);
  }
}
