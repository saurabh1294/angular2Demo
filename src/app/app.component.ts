import { Component, OnInit } from '@angular/core';
import { UserService } from "./app.component.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})


/*
export class AppComponent {
   title = 'app works!';
   users;
 
   constructor(private userService: UserService) {
      this.users = userService.getUsers();
   }
}
*/


export class AppComponent implements OnInit {
 
   title = 'app works!';
   users;
 
   constructor(private userService: UserService) {
   }
 
   ngOnInit() {
      this.userService.getUsers().subscribe(p=>this.users = p);
   }
}