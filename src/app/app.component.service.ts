import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { LaunchPad } from "./app.models.launchpad"; 
import { LaunchInfo } from "./app.models.launchinfo";
 
@Injectable()
export class LaunchPadService {
   constructor(private http: Http) {
   }
 
   getLaunchPads(): Observable <LaunchPad[]> {
      return this.http.get("http://localhost:8001/launchpads")
         .map((res: Response) => res.json())
         .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
   }
}

@Injectable()
export class LaunchInfoService {
   constructor(private http: Http) {
   }
 
   getLaunchesInfo(): Observable <LaunchInfo[]> {
      return this.http.get("http://localhost:8001/launches")
         .map((res: Response) => res.json())
         .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
   }
}