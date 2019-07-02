import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MovieListComponent } from './movie/movie-list/movie-list.component';
import { MovieCardComponent } from './movie/movie-card/movie-card.component';

import { MatRippleModule, MatToolbarModule, MatMenuModule, MatIconModule, MatButtonModule, MatSnackBarModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { VoteAverageComponent } from './shared/vote-average/vote-average.component';
import { MovieDetailComponent } from './movie/movie-detail/movie-detail.component';
import { MoviePosterComponent } from './movie/movie-poster/movie-poster.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MovieCardComponent,
    ToolbarComponent,
    VoteAverageComponent,
    MovieDetailComponent,
    MoviePosterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatRippleModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
