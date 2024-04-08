import { Component } from '@angular/core';
import { MapsModule } from '@syncfusion/ej2-angular-maps';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RouterOutlet } from '@angular/router';
import { OnInit } from '@angular/core';
// import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MapsModule,
    RouterOutlet,
    NavbarComponent,
    HeaderComponent,
    HomeComponent,
    CommonModule,
    // MatIconModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  ngOnInit(): void {}

  title = 'angular-dashboard';
  navOpen = true; // Initially set selected index

  receiveNavOpen(boo: boolean) {
    this.navOpen = boo;
    // Handle selection change in app component (e.g., update content)
  }
}
