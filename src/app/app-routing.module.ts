import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SectionsComponent} from './sections/sections.component'
import { News1Component } from './news1/news1.component';
const routes: Routes = [
  {
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
