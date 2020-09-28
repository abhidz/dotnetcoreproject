import { Component } from '@angular/core';
import {AuthService} from '../services/auth.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  constructor(private service:AuthService){}
  logout(){
    debugger;
  this.service.logOut();
  }
}
