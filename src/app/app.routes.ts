import { Routes } from '@angular/router';
import { PostListComponent } from './pages/post-list/post-list';
import { PostDetailComponent } from './pages/post-detail/post-detail';
import { PostFormComponent } from './pages/post-form/post-form';
export const routes: Routes = [
  { path: '', redirectTo: 'posts', pathMatch: 'full' },
  { path: 'posts', component: PostListComponent },
  { path: 'posts/new', component: PostFormComponent },
  { path: 'posts/:id', component: PostDetailComponent },
  { path: '**', redirectTo: 'posts' },
];
