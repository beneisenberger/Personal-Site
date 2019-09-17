import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { MediaComponent } from './media/media.component';
import { EventsComponent } from './events/events.component';
import { CodeComponent } from './code/code.component';
import { ContactComponent } from './contact/contact.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostDashboardComponent } from './posts/post-dashboard/post-dashboard.component';
import { PostDetailComponent } from './posts/post-detail/post-detail.component';


const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'blog/main', component: PostListComponent},
  {path: 'blog/dashboard', component: PostDashboardComponent},
  {path: 'blog/:id', component: PostDetailComponent},
  {path: 'media', component: MediaComponent},
  {path: 'events', component: EventsComponent},
  {path: 'code', component: CodeComponent},
  {path: 'contact', component: ContactComponent},
  {path: '**', redirectTo: '/about'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
