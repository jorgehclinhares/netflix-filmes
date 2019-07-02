import { Component, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { MediaChange, MediaObserver } from '@angular/flex-layout';

@Component({
  selector: 'app-movie-poster',
  templateUrl: './movie-poster.component.html',
  styleUrls: ['./movie-poster.component.scss']
})
export class MoviePosterComponent implements OnDestroy {

  mediaQuerySubscription: Subscription;
  activeMediaQuery: string;

  @Input() image: string;
  @Input() imageXs: string;

  constructor(
    private mediaObserver: MediaObserver
  ) {
    this.mediaQuerySubscription = this.mediaObserver.media$.subscribe((change: MediaChange) => this.activeMediaQuery = change.mqAlias);
  }

  ngOnDestroy() {
    if (this.mediaQuerySubscription) {
      this.mediaQuerySubscription.unsubscribe();
    }
  }

}
