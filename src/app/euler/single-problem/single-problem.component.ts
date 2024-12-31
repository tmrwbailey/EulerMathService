import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleProblem } from '../../single-problem';
import { RouterLink, RouterOutlet } from '@angular/router'

@Component({
  selector: 'app-single-problem',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterOutlet,
  ],
  template: `
    <section class="problem-display">
      <h2 class="problem-display-number">{{ singleProblem.id }}</h2>
      <h1 class="problem-display-heading">{{ singleProblem.problemName }}</h1>
      <a [routerLink]="['/Euler/details', singleProblem.id]">View Problem</a>
  `,
  styleUrls: ['./single-problem.component.css']
})
export class SingleProblemComponent {
  @Input() singleProblem!: SingleProblem;
}
