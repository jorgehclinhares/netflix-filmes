import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VoteAverageComponent } from './vote-average.component';

@NgModule({
  declarations: [
    VoteAverageComponent
  ],
  imports: [CommonModule],
  exports: [
    VoteAverageComponent
  ],
  providers: [],
})
export class VoteAverageModule { }
