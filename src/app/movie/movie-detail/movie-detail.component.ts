import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MediaChange, MediaObserver } from '@angular/flex-layout';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit, OnDestroy {

  mediaQuerySubscription: Subscription;
  activeMediaQuery: string;

  constructor(
    private mediaObserver: MediaObserver
  ) {
    this.mediaQuerySubscription = this.mediaObserver.media$.subscribe((change: MediaChange) => this.activeMediaQuery = change.mqAlias);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.mediaQuerySubscription) {
      this.mediaQuerySubscription.unsubscribe();
    }
  }

}
