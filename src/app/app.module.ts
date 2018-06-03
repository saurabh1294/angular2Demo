import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { LaunchPadService, LaunchInfoService} from "./app.component.service";
import { AgmCoreModule } from '@agm/core';

 
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
	AgmCoreModule.forRoot({
      // please get your own API key here:
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
      apiKey: 'AIzaSyCsStqSSPDWjBgJvHNcKjJjzyV6ha6oaa0'
    })
  ],
  providers: [LaunchPadService, LaunchInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }