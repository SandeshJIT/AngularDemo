import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import {HttpClientModule } from '@angular/common/http';
import { SubcompComponent } from './subcomp/subcomp.component'
import { DataService } from './dataservice.service';
import { routing } from './app.routing';
// import { NewformComponent } from './newform/newform.component';
import { BaseComponent } from './base/base.component';
import { newRoute } from './newform/new-item.routing';

@NgModule({
  declarations: [
    AppComponent,
    SubcompComponent,
    // NewformComponent,
    BaseComponent
  ],
  imports: [
    BrowserModule , FormsModule , HttpClientModule , ReactiveFormsModule , routing , newRoute
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
