import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  courseItems = [];
  constructor() { }

  addToCart(item) {
    this.courseItems.push(item);
  }

  getCourseItems() {
    return this.courseItems;
  }

  getLength() {
    return this.courseItems.length;
  }

  clearCart() {
    this.courseItems = [];
    return this.courseItems;
  }
}
