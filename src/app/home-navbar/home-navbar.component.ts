import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-navbar',
  templateUrl: './home-navbar.component.html',
  styleUrls: ['./home-navbar.component.css']
})
export class HomeNavbarComponent implements OnInit {

  constructor() { }

  showMenu = false;
  toggleNavbar(){
    this.showMenu = !this.showMenu;
  }

  ngOnInit(): void {
  }

}
