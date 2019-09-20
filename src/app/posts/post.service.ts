import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Post, Comment } from './post';
import { map } from 'rxjs/operators';
import { AuthService } from '../core/auth.service';


@Injectable({
  providedIn: 'root'
})
export class PostService {
  postsCollection: AngularFirestoreCollection<Post>
  postDoc: AngularFirestoreDocument<Post>
  commentsCollection: AngularFirestoreCollection<Comment>
  commentDoc: AngularFirestoreDocument<Comment>

  comments: Comment[] = [];
  postId: "";

  constructor(private afs: AngularFirestore, private auth: AuthService) {
    this.postsCollection = this.afs.collection('posts', ref =>
    ref.orderBy('published', 'desc'));
    this.commentsCollection = this.afs.collection('comments', ref => 
    ref.orderBy('published', 'asc'));
  }

  ////////////

  getPosts() {
    return this.postsCollection.snapshotChanges().pipe(map(actions => {
      return actions.map(x => {
        const data = x.payload.doc.data() as Post
        const id = x.payload.doc.id
        return { id, ...data}
      })
    }))
  }

  // getComments() {
  //   return this.commentsCollection.snapshotChanges().pipe(map(actions => {
  //     return actions.map(x => {
  //       const data = x.payload.doc.data() as Comment
  //       const id = x.payload.doc.id;
  //       return { id, ...data}
  //     })
  //   }))
  // }
  


  /////////////

  getPostData(id: string) {
    this.postDoc = this.afs.doc<Post>(`posts/${id}`);
    return this.postDoc.valueChanges();
  }

  getCommentData(postId: string) {
    return this.afs.collection('comments', ref => ref.where('postId', '==', postId)).snapshotChanges().pipe(map(actions => {
      return actions.map(x => {
        const data = x.payload.doc.data() as Comment
        const id = x.payload.doc.id;
        // this.commentDoc = this.afs.doc<Comment>(`comments/${id}`);
        return { id, ...data}  
      })
    }))
  }

  ////////////

  create(data: Post) {
    this.postsCollection.add(data);
  }
  createComment(data: Comment) {
    this.commentsCollection.add(data);
  }

  ////////////

  getPost(id: string) {
    return this.afs.doc<Post>(`posts/${id}`);
  }
  getComment(id: string) {
    return this.afs.doc<Comment>(`comments/${id}`);
  }

  ////////////

  delete(id: string) {
    return this.getPost(id).delete();
  }

  ////////////

  update(id: string, formData) {
    return this.getPost(id).update(formData);
  }

  ////////////

}