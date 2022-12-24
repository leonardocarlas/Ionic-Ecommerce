import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { collection, addDoc, Firestore } from 'firebase/firestore';
import firestoreDB from 'src/app/app-firebase';
import { ActivatedRoute } from '@angular/router';
import { Tshirt } from 'src/assets/models/tshirt';
import { PricePipe } from 'src/app/pipes/price.pipe';

@Component({
  selector: 'app-shirt-detail',
  templateUrl: './shirt-detail.page.html',
  styleUrls: ['./shirt-detail.page.scss'],
})
export class ShirtDetailPage implements OnInit {

  idProduct: number;
  tshirtPromise: Promise<Tshirt>;
  tshirt;

  constructor(
    private cartService: CartService,
    public route: ActivatedRoute
  ) {
    this.idProduct = this.route.snapshot.params.id;
    this.tshirtPromise = firestoreDB.getBasketballTshirtById(this.idProduct);
  }

  ngOnInit() {
    this.tshirtPromise.then( tshirt => {
      this.tshirt = tshirt;
    });
  }

  public addItemToCart(): void {
    this.cartService.sendCartItemsIds(this.idProduct);
  }

  public addItemToFavorite(): void {
    // console.log('Item added to favorite');
    // firestoreDB.writeDoc();
  }
}
