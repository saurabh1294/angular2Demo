import { Component, OnInit } from '@angular/core';
import { LaunchPadService, LaunchInfoService } from "./app.component.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})



export class AppComponent implements OnInit {
 
   title = 'app works!';
   launchpads; launches;
   selectedLaunchPad :any;
   selectedLaunch: any;
 
   constructor(private launchPadService: LaunchPadService,
			   private launchInfoService: LaunchInfoService) {
				   this.selectedLaunchPad = 0;
				   this.selectedLaunch = 0;
   }
   
  selectLaunchPad(item) {
      this.selectedLaunchPad = item; 
  };
  
  isActiveLaunchPad(item) {
      return this.selectedLaunchPad === item;
  };
  
  selectLaunch(item) {
      this.selectedLaunch = item; 
  };
  
  isActiveLaunch(item) {
      return this.selectedLaunch === item;
  };
 
   ngOnInit() {
      this.launchPadService.getLaunchPads().subscribe(p=>this.launchpads = p);
	  this.launchInfoService.getLaunchesInfo().subscribe(p=>this.launches = p);
   }
}