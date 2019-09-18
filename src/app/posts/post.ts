import { firestore } from 'firebase/app';
import Timestamp = firestore.Timestamp;

export class Post {
    id?: string
    title: string
    author: string
    authorId: string
    content: string
    image: string
    published: Timestamp | Date
}
