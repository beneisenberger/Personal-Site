import { Component, OnInit } from '@angular/core';
import { Post, Comment } from '../post';
import { PostService } from '../post.service';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  posts: Observable<Post[]>;
  commentNumber: Observable<number>;
  comments: Object = this.postService.commentsCollection;

  constructor(private postService: PostService, public auth: AuthService) { }

  ngOnInit() {
    this.posts = this.postService.getPosts();
  }

  delete(id: string) {
    this.postService.delete(id);
  }
  
}

