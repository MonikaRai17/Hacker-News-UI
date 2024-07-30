import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StorylistComponent } from './storylist/storylist.component';
import { provideHttpClient } from '@angular/common/http';
import { HttpService }  from './services/http.service'
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    AppComponent,
    StorylistComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule,
    
    
  ],
  providers: [
    HttpService,
    provideHttpClient(),
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
