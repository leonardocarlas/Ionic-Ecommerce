import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tshirt } from 'src/assets/models/tshirt';
import { PricePipe } from '../../pipes/price.pipe';

@Component({
  selector: 'app-shirt',
  templateUrl: './shirt.component.html',
  styleUrls: ['./shirt.component.scss'],
})
export class ShirtComponent implements OnInit {

  @Input() shirt: Tshirt;
  constructor(private router: Router) { }

  ngOnInit() {}

  public openItem(idProduct: number) {
    this.router.navigate([`tabs/${idProduct}`]);
  }

}
