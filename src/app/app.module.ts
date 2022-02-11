import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';

import {MatPaginatorModule, MatProgressSpinnerModule, MatTableModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {SearchComponent} from './components/search.component';
import {DetailsDialogComponent} from './components/dialogs/details-dialog.component';

import {SearchService} from './services/search.service';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    DetailsDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [
    SearchService
  ],
  entryComponents: [
    DetailsDialogComponent
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}
