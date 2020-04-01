import { NgModule } from '@angular/core';
import { MatButtonModule, MatButtonToggleModule, MatIconModule, MatBadgeModule, MatProgressSpinnerModule, MatToolbarModule, MatSidenavModule, MatMenuModule, MatListModule, MatDividerModule, MatGridListModule, MatExpansionModule, MatCardModule, MatTabsModule, MatStepperModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatAutocompleteModule, MatCheckboxModule, MatRadioModule, MatDatepickerModule, MatNativeDateModule, MatTooltipModule, MatSnackBarModule, MatDialogModule, MatTableModule, MatSortModule, MatPaginatorModule, MatSpinner } from '@angular/material';

const material = [
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatBadgeModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule,
  MatListModule,
  MatDividerModule,
  MatGridListModule,
  MatExpansionModule,
  MatCardModule,
  MatTabsModule,
  MatStepperModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatAutocompleteModule,
  MatCheckboxModule,
  MatRadioModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatTooltipModule,
  MatSnackBarModule,
  MatDialogModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule
] // material

@NgModule({
  declarations: [],
  imports: [material],
  exports: [material]
}) // NgModule
export class MaterialModule { }
