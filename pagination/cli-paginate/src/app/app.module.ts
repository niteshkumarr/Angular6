import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {OrderModule} from "ngx-order-pipe"
import {NgxPaginationModule} from "ngx-pagination"
import { AppComponent } from './app.component';
import {Ng2SearchPipeModule} from "ng2-search-filter"
import {FormsModule} from "@angular/forms"

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule,BrowserModule,OrderModule,NgxPaginationModule,Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
