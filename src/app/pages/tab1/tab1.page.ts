import { Component } from '@angular/core';
// import { basketBallShirts } from 'src/assets/mock/basketball.shirt';
import firestoreDB from 'src/app/app-firebase';
import { Tshirt } from 'src/assets/models/tshirt';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  shirts: Tshirt[] = [];

  constructor() {
    firestoreDB.getBasketballTshirts().then( tshirts => {
      this.shirts = tshirts;
    });
  }

}
