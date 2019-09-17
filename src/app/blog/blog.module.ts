import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from '../posts/post-list/post-list.component';
import { BlogComponent } from './blog.component';



@NgModule({
  declarations: [
    PostListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BlogComponent
  ]
})
export class BlogModule { }
