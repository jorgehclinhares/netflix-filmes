import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from './movie-list.component';
import { MovieCardModule } from '../movie-card/movie-card.module';
import { RouterModule } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    MovieListComponent
  ],
  imports: [
    CommonModule,
    MovieCardModule,
    RouterModule,
    MatProgressSpinnerModule,
    FlexLayoutModule
  ],
  exports: [
    MovieListComponent
  ],
  providers: [],
})
export class MovieListModule { }
