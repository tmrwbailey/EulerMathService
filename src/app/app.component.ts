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
    <header class="site-name">
      <a [routerLink]="['/']">
        <img class="site-logo" src="assets/Math_logo.png" alt="logo" aria-hidden="true">
      </a>
      <div class="attribution-header">
        <h2>Mark Bailey</h2>
        <h3>Software Engineer</h3>
        <a href="mailto:supermathnerd@gmail.com">supermathnerd@gmail.com</a>
        <a href="https://docs.google.com/document/d/1imJ-iqj09xG8ZJB6aswko6HehxiIht1x/edit?usp=sharing&ouid=110377170203688569309&rtpof=true&sd=true" target="_blank">View Resume</a>
      </div>
    </header>
    <section class="content">
      <router-outlet></router-outlet>
    </section>
</main>`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Euler';
}
