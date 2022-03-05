import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-barra-lateral',
  templateUrl: './barra-lateral.component.html',
  styleUrls: ['./barra-lateral.component.css'],
})
export class BarraLateralComponent implements OnInit {
  @Output() lateralBtn = new EventEmitter<any>();

  constructor() {}

  buttonPressed(value: string) {
    this.lateralBtn.emit(value);
  }

  ngOnInit(): void {}
}
