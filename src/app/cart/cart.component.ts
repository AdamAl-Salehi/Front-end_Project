import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
	items;
  checkoutForm;
  courseItems = this.cartService.courseItems;
  courseSum = 0;

  constructor(private cartService: CartService, private formBuilder: FormBuilder) { 
  	this.checkoutForm = this.formBuilder.group({
     	name: '',
    	address: ''
   })
  }

  ngOnInit(): void {
    this.items = this.cartService.getCourseItems();
    for(let i = 0; i < this.courseItems.length; i++){
      this.courseSum += this.courseItems[i].price;
    }
  }

   onSubmit(customerData) {
   // Process checkout data here
   console.warn('Your order has been submitted', customerData);

   this.items = this.cartService.clearCart();
   this.checkoutForm.reset();
 }
}
