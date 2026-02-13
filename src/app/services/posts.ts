import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostInterface } from '../models/post';

@Injectable({
  providedIn: 'root',
})

//Esta clase equivale a los endpoints que hemos visto con Tomás
export class PostsService {
  
  //con el patron Singleton creamos la variable con la url de donde vamos a leer los datos
  private readonly url='https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient){}

  //igual que el findAll()
  getAll(): Observable<PostInterface[]>{
    return this.http.get<PostInterface[]>(this.url);
  }

  getById(id:number){
    return this.http//desde esta direccion
        .get//recogemos
        <PostInterface>//un unico Post
        (`${this.url}/${id}`) //this.url es la del jsonplaceholder y le añades el id que quieras
  }

  delete(id:number){
    return this.http.delete<void>(`${this.url}/${id}`)
  }

  create(post: PostInterface){
    this.http.post<PostInterface>(this.url,post)
  }

  
}
