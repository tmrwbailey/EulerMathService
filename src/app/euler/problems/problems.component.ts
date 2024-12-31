import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleProblemComponent } from '../single-problem/single-problem.component';
import { SingleProblem } from '../../single-problem';
import { EulerSolutionService } from '../../euler-solution.service';

@Component({
  selector: 'app-problems',
  standalone: true,
  imports: [
    CommonModule,
    SingleProblemComponent,
  ],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Search Problems">
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      <app-single-problem 
        *ngFor="let singleProblem of singleProblemList"
        [singleProblem]="singleProblem"></app-single-problem>
    </section>

  `,
  styleUrls: ['./problems.component.css']
})
export class ProblemsComponent {
  singleProblemList: SingleProblem[] = [];
  eulerSolutionService = inject(EulerSolutionService);

  constructor(){
    this.singleProblemList = this.eulerSolutionService.getAllEulerProblems();
  }
}
