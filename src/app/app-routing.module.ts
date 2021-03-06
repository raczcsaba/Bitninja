import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BejegyzesekComponent } from './bejegyzesek/bejegyzesek.component';
import { BejegyzesDetailComponent } from './bejegyzes-detail/bejegyzes-detail.component'
import { PostComponent } from './post/post.component'

const routes: Routes = [
  { path: 'bejegyzesek', component: BejegyzesekComponent },
  { path: '', redirectTo: '/bejegyzesek', pathMatch: 'full' },
  { path: 'post', component: PostComponent },
  { path: 'bejegyzes/:id', component: BejegyzesDetailComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
