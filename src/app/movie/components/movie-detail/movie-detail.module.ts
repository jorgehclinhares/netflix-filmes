import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule, MatButtonModule } from '@angular/material';
import { MovieDetailComponent } from './movie-detail.component';
import { MovieService } from '../../services/movie/movie-service.service';
import { MoviePosterModule } from '../movie-poster/movie-poster.module';
import { VoteAverageModule } from 'src/app/shared/vote-average/vote-average.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    MovieDetailComponent
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MoviePosterModule,
    VoteAverageModule,
    FlexLayoutModule,
    MatButtonModule
  ],
  exports: [
    MovieDetailComponent
  ],
  providers: [
    MovieService
  ],
})
export class MovieDetailModule { }
