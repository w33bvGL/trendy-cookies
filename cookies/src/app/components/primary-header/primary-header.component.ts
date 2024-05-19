import { Component } from '@angular/core';

@Component({
  selector: 'app-primary-header',
  standalone: true,
  imports: [],
  templateUrl: './primary-header.component.html',
  styleUrl: './primary-header.component.scss'
})
export class PrimaryHeaderComponent {
  smoothScrollToAnchor(scrollTo: string): void {
    const element = document.getElementById(scrollTo);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error(`Element with ID '${scrollTo}' not found.`);
    }
  }
}
