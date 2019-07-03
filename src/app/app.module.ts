import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouterModule } from '@angular/router';
import { ToolbarModule } from './shared/toolbar/toolbar.module';
import { MovieCardModule } from './movie/components/movie-card/movie-card.module';
import { MovieDetailModule } from './movie/components/movie-detail/movie-detail.module';
import { MovieListModule } from './movie/components/movie-list/movie-list.module';
import { MoviePosterModule } from './movie/components/movie-poster/movie-poster.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    ToolbarModule,
    MovieCardModule,
    MovieDetailModule,
    MovieListModule,
    MoviePosterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
