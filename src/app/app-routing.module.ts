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
import { Y2020Component } from './events/y2020/y2020.component';
import { Y2019Component } from './events/y2019/y2019.component';
import { Y2018Component } from './events/y2018/y2018.component';
import { Y2017Component } from './events/y2017/y2017.component';
import { Y2016Component } from './events/y2016/y2016.component';
import { Y2015Component } from './events/y2015/y2015.component';
import { Y2014Component } from './events/y2014/y2014.component';
import { Y2013Component } from './events/y2013/y2013.component';
import { Y2012Component } from './events/y2012/y2012.component';
import { Y2011Component } from './events/y2011/y2011.component';
import { Y2010Component } from './events/y2010/y2010.component';
import { victimsOfCircumstanceKey } from '../environments/environment'
import { Album2Component } from './media/album2/album2.component';


const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'blog/main', component: PostListComponent},
  {path: 'blog/dashboard', component: PostDashboardComponent},
  {path: 'blog/:id', component: PostDetailComponent},
  {path: 'media', component: MediaComponent}, 
  {path: `${victimsOfCircumstanceKey}`, component: Album2Component},
  {path: 'events', component: EventsComponent,
    children: [
      {path: 'y2020', component: Y2020Component},
      {path: 'y2019', component: Y2019Component},
      {path: 'y2018', component: Y2018Component},
      {path: 'y2017', component: Y2017Component},
      {path: 'y2016', component: Y2016Component},
      {path: 'y2015', component: Y2015Component},
      {path: 'y2014', component: Y2014Component},
      {path: 'y2013', component: Y2013Component},
      {path: 'y2012', component: Y2012Component},
      {path: 'y2011', component: Y2011Component},
      {path: 'y2010', component: Y2010Component}
    ]},
  {path: 'code', component: CodeComponent},
  {path: 'contact', component: ContactComponent},
  {path: '**', redirectTo: '/about'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
