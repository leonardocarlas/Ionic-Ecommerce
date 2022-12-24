/* eslint-disable no-underscore-dangle */
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  _cartItemsIds: number[];
  cartItemsIds$ = new Subject<number[]>();

  constructor() {
    this._cartItemsIds = [];
  }

  sendCartItemsIds(id: number) {
    this._cartItemsIds.push(id);
    this.cartItemsIds$.next(this._cartItemsIds);
  }

  getCartItemsIds(): Observable<any> {
    return this.cartItemsIds$.asObservable();
  }

  emptyCart(): void {
    this._cartItemsIds = [];
    this.cartItemsIds$.next(this._cartItemsIds);
  }
}
