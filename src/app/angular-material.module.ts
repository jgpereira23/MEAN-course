import { NgModule } from '@angular/core';
import {
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule,
  MatProgressSpinnerModule,
  MatPaginatorModule,
  MatDialogModule,
  MatInputModule
} from '@angular/material';

@NgModule({
  exports: [
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatDialogModule,
    MatInputModule
  ]
})
export class AngularMaterialModule {}
