import { Component, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
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
  content: SafeHtml | null = null;

  constructor(injector: Injector, domSanitizer: DomSanitizer) {
    const AlertElement = createCustomElement(AlertComponent, {
      injector: injector,
    });
    customElements.define('my-alert', AlertElement);
    setTimeout(() => {
      this.content = domSanitizer.bypassSecurityTrustHtml(
        '<my-alert message="rendered dinamically"></my-alert>'
      );
    }, 1000);
  }
}
