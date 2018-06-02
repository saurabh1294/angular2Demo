export class LaunchPad {
   constructor(
      public id: string,
      public full_name: string,
      public status: string,
      public location: object,
	  public vehicles_launched: string[],
	  public details: string
   ) {}
}