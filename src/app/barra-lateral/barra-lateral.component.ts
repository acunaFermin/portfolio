import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-barra-lateral',
  templateUrl: './barra-lateral.component.html',
  styleUrls: ['./barra-lateral.component.css'],
})
export class BarraLateralComponent implements OnInit {
  @Output() lateralBtn = new EventEmitter<any>();
  @Input() scrollIndex!: number;
  status: boolean = false;

  constructor() {
    console.log(window.visualViewport.width);
  }
  ngOnInit(): void {}

  buttonPressed(value: string) {
    this.lateralBtn.emit(value);

    //checkeo que no este en modo responsive
    if (
      window.visualViewport.width < 1024 ||
      window.visualViewport.height < 800
    ) {
      this.status = !this.status;
    }
  }

  desplegar() {
    this.status = !this.status;
  }
}
