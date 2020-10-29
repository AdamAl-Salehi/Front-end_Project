import { Component, OnInit } from '@angular/core';
import { CourseList } from '../CourseList';

@Component({
  selector: 'app-all-offers',
  templateUrl: './all-offers.component.html',
  styleUrls: ['./all-offers.component.css']
})
export class AllOffersComponent implements OnInit {
	courses=CourseList;

  constructor() { }

  ngOnInit(): void {
  }

}
