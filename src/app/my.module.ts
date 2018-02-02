import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

@NgModule({
  imports: [
	MatButtonModule,
	MatTabsModule,
	MatCardModule,
	MatMenuModule,
	MatIconModule,
	MatToolbarModule,
	MatInputModule,
	MatGridListModule,
	MatDividerModule,
	MatListModule,
	MatButtonToggleModule,
  ],
  exports: [
	MatButtonModule,
	MatTabsModule,
	MatCardModule,
	MatMenuModule,
	MatIconModule,
	MatToolbarModule,
	MatInputModule,
	MatGridListModule,
	MatDividerModule,
	MatListModule,
	MatButtonToggleModule,
  ],
})
export class MyModule { }
