import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  posts: Observable<Post[]>
  constructor(private postsService: PostService, public auth: AuthService) { }

  ngOnInit() {
    this.posts = this.postsService.getPosts();
  }

  delete(id: string) {
    this.postsService.delete(id);
  }

}
