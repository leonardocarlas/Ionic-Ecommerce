import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tshirt-order-detail',
  templateUrl: './tshirt-order-detail.component.html',
  styleUrls: ['./tshirt-order-detail.component.scss'],
})
export class TshirtOrderDetailComponent implements OnInit {

  @Input() tshirt;

  constructor() { }

  ngOnInit() {}

}
