import { Component, Output, EventEmitter } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  selectedIndex: number = 1; // Initialize selected index to first item

  @Output() navOpen = new EventEmitter<boolean>();
  checkHighlight(num: number): boolean {
    return this.selectedIndex === num;
  }

  toggleHighlight(index: number) {
    this.selectedIndex = index; // Update selected index on click
  }

  isNavOpen = true; // Initial state: navigation closed

  toggleNav() {
    this.isNavOpen = !this.isNavOpen; // Toggle navigation state on click
    this.navOpen.emit(this.isNavOpen);
  }
}
