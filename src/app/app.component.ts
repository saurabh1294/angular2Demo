import { Component, OnInit } from '@angular/core';
import { LaunchPadService, LaunchInfoService } from "./app.component.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})



export class AppComponent implements OnInit {
 
   title = 'app works!';
   launchpads; launches;
 
   constructor(private launchPadService: LaunchPadService,
			   private launchInfoService: LaunchInfoService) {
   }
 
   ngOnInit() {
      this.launchPadService.getLaunchPads().subscribe(p=>this.launchpads = p);
	  this.launchInfoService.getLaunchesInfo().subscribe(p=>this.launches = p);
   }
}