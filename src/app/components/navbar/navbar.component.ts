import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isMenuOpened = false;

  menuToggle(){
    this.isMenuOpened = !this.isMenuOpened;
  }
}
