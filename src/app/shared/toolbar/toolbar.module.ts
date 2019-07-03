import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar.component';
import {
  MatToolbarModule, MatMenuModule, MatButtonModule,
  MatSnackBarModule, MatRippleModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatSnackBarModule,
    FlexLayoutModule,
    RouterModule,
    MatRippleModule
  ],
  exports: [
    ToolbarComponent
  ],
  providers: [],
})
export class ToolbarModule { }
