import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Form10Component } from './form10/form10.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Form10Component,],
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css'],
  template: `
  <main>
    <header class="brand-name">
      <p>Teste de Angular</p>
    </header>
    <section class="content">
      <app-form10></app-form10>
    </section>
  </main>
`,
})
export class AppComponent {
  title = 'form-10';
}
