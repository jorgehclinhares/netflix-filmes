import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VoteAverageModule } from '../../../shared/vote-average/vote-average.module';
import { MovieCardComponent } from './movie-card.component';
import { MoviePosterModule } from '../movie-poster/movie-poster.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatRippleModule } from '@angular/material';

@NgModule({
  declarations: [
    MovieCardComponent
  ],
  imports: [
    CommonModule,
    VoteAverageModule,
    MoviePosterModule,
    FlexLayoutModule,
    MatRippleModule
  ],
  exports: [
    MovieCardComponent
  ],
  providers: [],
})
export class MovieCardModule { }
