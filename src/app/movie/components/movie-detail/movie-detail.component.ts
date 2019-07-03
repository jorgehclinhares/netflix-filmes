import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie/movie-service.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit, OnDestroy {

  mediaQuerySubscription: Subscription;
  activeMediaQuery: string;

  movie: Movie;
  movieId: number;

  constructor(
    private mediaObserver: MediaObserver,
    private activatedRoute: ActivatedRoute,
    private movieService: MovieService
  ) {
    this.mediaQuerySubscription = this.mediaObserver.media$.subscribe((change: MediaChange) => this.activeMediaQuery = change.mqAlias);
    this.movieId = this.activatedRoute.snapshot.params.movieId;
  }

  ngOnInit() {
    this.movieService.getMovie(this.movieId)
      .then((res) => this.movie = res.data);
  }

  openHomepage() {
    window.open(this.movie.homepage);
  }

  ngOnDestroy() {
    if (this.mediaQuerySubscription) {
      this.mediaQuerySubscription.unsubscribe();
    }
  }

}
