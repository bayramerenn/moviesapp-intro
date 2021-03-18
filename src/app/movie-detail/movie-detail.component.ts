import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../model/movie';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  @Input() movie:Movie
  
  constructor(
    private movieService:MovieService,
    private route:ActivatedRoute,
    private location:Location
  ) { }

  ngOnInit(): void {
    this.getMovie();
  }
  getMovie():void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.movieService.getMovie(id).subscribe(movie => this.movie = movie);
  }

  save():void{
     this.movieService.update(this.movie)
      .subscribe(() => {
        this.location.back();
      })
  }
}
