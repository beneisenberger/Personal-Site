import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { FormsModule } from '@angular/forms';
// import { BlogComponent } from '../blog/blog.component';



@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    MaterialModule,
    FormsModule
    // BlogComponent
    ],
  declarations: [
    // BlogComponent
  ]
})
export class SharedModule { }
