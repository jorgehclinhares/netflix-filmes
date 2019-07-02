import { Component, OnDestroy } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Subscription } from 'rxjs';
import { MediaObserver, MediaChange } from '@angular/flex-layout';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnDestroy {

  mediaQuerySubscription: Subscription;
  activeMediaQuery: string;

  constructor(
    private snackbar: MatSnackBar,
    private mediaObserver: MediaObserver
  ) {
    this.mediaQuerySubscription = this.mediaObserver.media$.subscribe((change: MediaChange) => this.activeMediaQuery = change.mqAlias);
  }

  notImplemented() {
    this.snackbar.open('Ação temporareamente indisponível.', 'OK', { duration: 4500 });
  }

  ngOnDestroy() {
    if (this.mediaQuerySubscription) {
      this.mediaQuerySubscription.unsubscribe();
    }
  }

}
