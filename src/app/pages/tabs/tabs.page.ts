import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { StatusBar, Style } from '@capacitor/status-bar';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {

  cartItemsIds: number[];

  constructor(private cartService: CartService) {
    this.cartItemsIds = [];
  }

  ngOnInit(): void {
    this.cartService.getCartItemsIds().subscribe( itemsIds => {
      if (itemsIds != null) {
        this.cartItemsIds = itemsIds;
      }
    });
    // Display content under transparent status bar (Android only)
    StatusBar.setOverlaysWebView({ overlay: true });
  }


}
