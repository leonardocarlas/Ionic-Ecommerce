/* eslint-disable no-underscore-dangle */
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import firestoreDB from 'src/app/app-firebase';
import { CartService } from 'src/app/services/cart.service';
import { Tshirt } from 'src/assets/models/tshirt';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnChanges, OnInit {

  // _favoriteItemsIds: number[];
  _cartItemsIds: number[];
  _cartItems: Tshirt[];
  cartItemsSubscription: Subscription;

  constructor(private cartService: CartService,
    private alertController: AlertController) {
    this._cartItemsIds = [];
    this.cartItems = [];
  }

  get cartItemsIds(): number[] {
    return this._cartItemsIds;
  }
  set cartItemsIds(newItemsIds: number[]) {
    this._cartItemsIds = newItemsIds;
  }
  // eslint-disable-next-line @typescript-eslint/member-ordering
  get cartItems(): Tshirt[] {
    return this._cartItems;
  }
  set cartItems(newItems: Tshirt[]) {
    this._cartItems = newItems;
  }

  ngOnInit(): void {
    this.cartItemsSubscription = this.cartService.getCartItemsIds().subscribe( itemsIds => {
      if (itemsIds != null) {
        this.cartItemsIds = itemsIds;
        firestoreDB.getTshirts(this._cartItemsIds).then( items => {
          if (items != null) {
            this.cartItems = items;
          }
        });
      }
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  emptyCart(): void {
    this.cartService.emptyCart();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Hey!!',
      subHeader: 'The demo is finished here',
      message: 'If you want to invest invest in the project or get in contact write me at info@leonardocarlassare.com',
      buttons: ['OK'],
    });

    await alert.present();
  }

}
