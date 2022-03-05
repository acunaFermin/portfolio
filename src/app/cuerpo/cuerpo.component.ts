import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css'],
})
export class CuerpoComponent implements OnInit {
  lateralBarValue: string = '';

  constructor() {}

  ngOnInit(): void {}

  receptValue(e: any) {
    console.log(e);
  }
}
