import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CourseList } from '../CourseList';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {
	course;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  	this.route.paramMap.subscribe(params => {
	this.course = CourseList[+params.get('courseId')];
  });
  }

}
