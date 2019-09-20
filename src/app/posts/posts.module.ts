import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { PostDashboardComponent } from './post-dashboard/post-dashboard.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostService } from './post.service';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { CommonModule } from '@angular/common';
import { FormatDatePipe } from '../format-date.pipe';

const routes: Routes = [
  { path: 'blog/list', component: PostListComponent },
  { path: 'blog/:id', component: PostDetailComponent },
  { path: 'blog/dashboard', component: PostDashboardComponent }
]

@NgModule({
  declarations: [
    PostDashboardComponent, 
    PostDetailComponent, 
    // PostListComponent,
    // FormatDatePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    PostService
  ]
})
export class PostsModule { }
