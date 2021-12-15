import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-show-name',
  templateUrl: './show-name.component.html',
  styleUrls: ['./show-name.component.css']
})
export class ShowNameComponent implements OnInit, OnChanges {
  @Input() nombre!:string;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Cambios')
  }

  ngOnInit(): void {
  }

}
