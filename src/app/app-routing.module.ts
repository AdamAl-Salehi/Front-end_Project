import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllOffersComponent } from './all-offers/all-offers.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';

const routes: Routes = [
		{
			path:'travels/:courseId', component: CourseDetailComponent
		},{
			path:'travels', component: AllOffersComponent
		}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
