import {
	Component,
	OnInit
} from '@angular/core';
import {
	LaunchPadService,
	LaunchInfoService
} from "./app.component.service";
import {
	MouseEvent
} from '@agm/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
})



export class AppComponent implements OnInit {

	title = 'app works!';
	launchpads;
	launches;
	selectedLaunchPad: any;
	selectedLaunch: any;
	// google maps zoom level
	zoom: number = 8;

	// initial center position for the map
	lat: number = 9.0477206;
	lng: number = 167.7431292;
	
	markers: marker[] = [
		 {
		  lat: 51.673858,
		  lng: 7.815982,
		  label: 'A',
		  draggable: true
	  },
	  {
		  lat: 51.373858,
		  lng: 7.215982,
		  label: 'B',
		  draggable: false
	  },
	  {
		  lat: 51.723858,
		  lng: 7.895982,
		  label: 'C',
		  draggable: true
	  }
	];

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

	getActiveLaunchPad() {
		return this.selectedLaunchPad;
	}

	selectLaunch(item) {
		this.selectedLaunch = item;
	};

	isActiveLaunch(item) {
		return this.selectedLaunch === item;
	};

	getActiveLaunch() {
		return this.selectedLaunch;
	}

	mapClicked($event: MouseEvent) {
		this.markers.push({
		  lat: $event.coords.lat,
		  lng: $event.coords.lng,
		  draggable: true
		});
	}
	
	getNumber(string) {
		return parseInt(string);
	}
	
	clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }
  
	markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }

	ngOnInit() {
		this.launchPadService.getLaunchPads().subscribe(p => this.launchpads = p);
		this.launchInfoService.getLaunchesInfo().subscribe(p => this.launches = p);
	}
}

// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}