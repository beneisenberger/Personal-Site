import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { PostDashboardComponent } from '../posts/post-dashboard/post-dashboard.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],

})
export class BlogComponent implements OnInit {

  constructor(public dialog: MatDialog, public auth: AuthService) { }

  writePost(): void {
    if (this.auth.authState.uid === "uk5hhJRosjc6pgMiFHrlBTg53b93") {
    const dialogRef = this.dialog.open(PostDashboardComponent, {
      width: '50vw',
    });
    }
    else {
      alert("Please don't post on my blog :(");
    }
  }

  ngOnInit() {
  }

}
