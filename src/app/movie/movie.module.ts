import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieRoutingModule } from './movie-routing.module';
import { MovieDetailModule } from './components/movie-detail/movie-detail.module';
import { MovieListModule } from './components/movie-list/movie-list.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MovieRoutingModule,
    MovieDetailModule,
    MovieListModule
  ],
  exports: [],
  providers: [],
})
export class MovieModule { }
