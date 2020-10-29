import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllOffersComponent } from './all-offers/all-offers.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import {SectionsComponent} from './sections/sections.component'
import { News1Component } from './news1/news1.component';

const routes: Routes = [
		{
			path:'travels/:courseId', component: CourseDetailComponent
		},{
			path:'travels', component: AllOffersComponent
		},{
		    path: '', component: SectionsComponent
		},{
		    path: 'news/:newsId', component: News1Component
		}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
