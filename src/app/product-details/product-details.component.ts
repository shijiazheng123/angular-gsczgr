import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';

import {CartService} from '../cart.service'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product; //initialize
  addToCart(product){
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap; //get route
    const productIdFromRoute = Number(routeParams.get('productId')); //get productId from route

    this.product = products.find(product => product.id === productIdFromRoute); //find product with corresponding id
  }

}