import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Movie } from '../model/movie';
import { Movies } from '../model/movies';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root',
})
export class MovieService {

  private apiMovieUrl = "api/movies";

  constructor(
    private loggingService: LoggingService,
    private http: HttpClient
  ) {}

  getMovies(): Observable<Movie[]> {
    this.loggingService.add('MovieService: Listing movies');
    return this.http.get<Movie[]>(this.apiMovieUrl);
  }
  getMovie(id: number): Observable<Movie> {
    this.loggingService.add('MovieService:get detail by id');
    return this.http.get<Movie>(this.apiMovieUrl+"/"+id);
  }
  
  update(movie:Movie):Observable<any>{
    const httpOptions = {
      headers : new HttpHeaders({'Content-Type':'application/json'})
    }
    return this.http.put(this.apiMovieUrl,movie,httpOptions);
  }

  add(movie:Movie):Observable<Movie>{
    return this.http.post<Movie>(this.apiMovieUrl,movie);
  }

  delete(movie:Movie):Observable<Movie>{
    
    return this.http.delete<Movie>(this.apiMovieUrl+"/"+movie.id);
  }
}
