import { Component, OnInit } from '@angular/core';
import { Movie } from '../model/movie';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  movies:Movie[]= [];
  movieLength:number;
  constructor(private movieService:MovieService) { }

  ngOnInit(): void {
    this.getMovies();
  }
  getMovies() :void{
    this.movieService.getMovies().
      subscribe(movies => {
        this.movies = movies.slice(0,10);
        this.movieLength = movies.length;
      });
  }

}
