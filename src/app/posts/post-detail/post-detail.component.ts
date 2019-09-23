import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';
import { Post, Comment } from '../post';
import { AuthService } from 'src/app/core/auth.service';
import { AngularFirestoreDocument, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {

  commentDoc: AngularFirestoreDocument<Comment>
  post: Post;
  comments: Comment[];
  editing: boolean = false;
  postId: string;
  currentUserImage: string = "";
  content: string = "";

  constructor(private afs: AngularFirestore, private route: ActivatedRoute, private router: Router, private postService: PostService, public auth: AuthService) {
   }



  ngOnInit() {
    this.getPost();
    this.getComments();
    this.postId = this.route.snapshot.paramMap.get('id');
    this.auth.afAuth.user.subscribe(user => 
      this.currentUserImage = user.photoURL
    )
  }

  getPost() {
    const id = this.route.snapshot.paramMap.get('id');
    return this.postService.getPostData(id).subscribe(data => this.post = data)
  }
  getComments() {
    const postId = this.route.snapshot.paramMap.get('id');
    return this.postService.getCommentData(postId).subscribe(data => {
      this.comments = [...data]
    });
  }

  createComment(content: string) {
    const data = {
      author: this.auth.authState.displayName || this.auth.authState.email,
      authorId: this.auth.currentUserId,
      authorImage: this.auth.authState.photoURL,
      content: content,
      published: new Date(),
      postId: this.postId
    }
    this.postService.createComment(data);
    }


  updatePost() {
    const formData = {
      title: this.post.title,
      content: this.post.content
    }
    const id = this.route.snapshot.paramMap.get('id');
    this.postService.update(id, formData);
    this.editing = false;
  }
  

  delete() {
    const id = this.route.snapshot.paramMap.get('id');
    this.postService.delete(id);
    this.router.navigate(["/blog"]);
  }

  deleteComment() {
    const commentid = this.route.snapshot.paramMap.get('id');
    this.postService.deleteComment(commentid);
  }
  
  
}
