export class LaunchInfo {
   constructor(
      public flight_number: string,
      public mission_name: string,
      public launch_year: string,
	  public launch_date_epoch: string,
	  public launch_date_utc: string,
      public launch_date_local: string,
	  public rocket: object,
	  public telemetry: object,
	  public reuse: object,
	  public launch_site: object,
	  public launch_success: boolean,
	  public links: object,
	  public details: string  
   ) {}
}