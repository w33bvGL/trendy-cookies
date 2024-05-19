import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  smoothScrollToAnchor(scrollTo: string): void {
    const element = document.getElementById(scrollTo);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error(`Element with ID '${scrollTo}' not found.`);
    }
  }
}
