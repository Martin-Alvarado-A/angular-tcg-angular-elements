import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AlertComponent } from './components/alert/alert.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AlertComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-tcg-angular-elements';
  content: string | null = null;

  constructor() {
    setTimeout(() => {
      this.content = '<app-alert message="rendered dinamically"></app-alert>';
    }, 1000);
  }
}
