import { Component } from '@angular/core';
import { Movie } from '../model/movie';
import { MovieService } from '../service/movie.service';


@Component({
    selector: 'movies',
    templateUrl: 'movies.component.html'
})
export class MoviesComponent {
    title = 'Movie List';
    movies: Movie[];
    selectedMovie: Movie;

    constructor(private movieService: MovieService) { }

    ngOnInit(): void {
        this.getMovies();
    }

    onSelect(movie: Movie): void {
        this.selectedMovie = movie;
    }

    getMovies(): void {
        this.movieService.getMovies()
            .subscribe(movies => {
                this.movies = movies;
            });
    }

    add(name:string,imageUrl:string,description:string):void{
        this.movieService.add({
            name,imageUrl,description
        } as Movie).subscribe(movies => this.movies.push(movies))
    }

    delete(movie:Movie):void{
        this.movies = this.movies.filter(f => f.id !== movie.id)
        this.movieService.delete(movie).subscribe(
            s => alert(s.name +" silindi")
        )
    }

}