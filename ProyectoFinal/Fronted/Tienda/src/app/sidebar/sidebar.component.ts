import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  @Input() isOpen = false;
  @Output() closeRequest = new EventEmitter<void>();
  @Output() categorySelected = new EventEmitter<string>();

  toggleSidebar() {
    this.closeRequest.emit();
  }

  selectCategory(category: string) {
    this.categorySelected.emit(category);
  }
}