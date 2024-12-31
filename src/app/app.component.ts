import { Component } from '@angular/core';
import { ProblemsComponent } from './euler/problems/problems.component';
import { CalculatorComponent } from './calc/calc.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ProblemsComponent,
    RouterModule,
    CalculatorComponent,
  ],
  template: `<main>
    <a [routerLink]="['/']">
      <header class="site-name">
        <img class="site-logo" src="/assets/Math_logo.png" alt="logo" aria-hidden="true">
      </header>
    </a>
    <section class="content">
      <router-outlet></router-outlet>
    </section>
</main>`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Euler';
}
