import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { PostInterface } from '../../models/post';
import { PostsService } from '../../services/posts';

@Component({
  selector: 'app-post-detail',
  imports: [RouterLink,AsyncPipe],
  templateUrl: './post-detail.html',
  styleUrl: './post-detail.css',
})
export class PostDetailComponent {
  // 1) Escucho cambios en la URL
  // 2) saco el id
  // 3) hago getById(id)
   post$!: Observable<PostInterface>;

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService,
    private router: Router
  ) {
    this.post$ = this.route.paramMap.pipe(
      switchMap(params => {
        const id = Number(params.get('id'));
        return this.postsService.getById(id);
      })
    );
  }

  deletePost(id:number){
    const ok = confirm('Seguro que quieres borrar este post');
    if(!ok) return;

    this.postsService.delete(id).subscribe({
      next: () => this.router.navigate(['/posts']),
      error: (e) => console.error('Error borrando', e)
    })
  }

}
