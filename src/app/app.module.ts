import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FiltersComponent } from './filters/filters.component';
import { DetailsComponent } from './details/details.component';
import { TableComponent } from './table/table.component';
import { CardModule } from 'primeng/card';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';
import {SliderModule} from 'primeng/slider';
import {InputTextareaModule} from 'primeng/inputtextarea';

@NgModule({
  declarations: [
    AppComponent,
    FiltersComponent,
    DetailsComponent,
    TableComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    TableModule,
    ButtonModule,
    CardModule,
    FontAwesomeModule,
    DropdownModule,
    InputTextModule,
    SliderModule,
    InputTextareaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
