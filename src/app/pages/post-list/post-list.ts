import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { PostInterface } from '../../models/post';
import { PostsService } from '../../services/posts';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-post-list',
  imports: [RouterLink, AsyncPipe],
  templateUrl: './post-list.html',
  styleUrl: './post-list.css',
})
export class PostListComponent {
  posts$!: Observable<PostInterface[]>

  constructor(private postService: PostsService){
    this.posts$ = this.postService.getAll();
  }
}
