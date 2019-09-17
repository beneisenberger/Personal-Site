import { NgModule} from "@angular/core" ;
import { MatButtonModule,
  MatToolbarModule,
MatExpansionModule,
MatInputModule,
MatProgressBarModule,
MatCardModule,
MatIconModule,
MatFormFieldModule } from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    MatProgressBarModule
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    MatProgressBarModule
  ]
})
export class MaterialModule { }
