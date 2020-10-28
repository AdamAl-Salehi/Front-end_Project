import { Component, OnInit } from '@angular/core';
import { CourseList } from '../../CourseList';
// import { CartService } from '../../cart.service';

@Component({
  selector: 'app-section-offer',
  templateUrl: './section-offer.component.html',
  styleUrls: ['./section-offer.component.css']
})
export class SectionOfferComponent implements OnInit {
  courses=CourseList;
  constructor() { }
  // constructor(private cartService: CartService) { }

  // addToCart(courseItems) {
  //   window.alert("Your vacation has been added to the cart!");
  //   this.cartService.addToCart(courseItems);
  // }

  ngOnInit(): void {
  }

}
