import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { EulerSolutionService } from '../../euler-solution.service';
import { SingleProblem, SolverFormStyle } from '../../single-problem';
import { MaxLimitFormComponent } from './max-limit-form/max-limit-form.component';

@Component({
  selector: 'app-problem-details',
  standalone: true,
  imports: [
    CommonModule,
    MaxLimitFormComponent,
  ],
  template: `
    <article>
    <section class="problem-description">
      <h2 class="problem-heading">{{singleProblem?.problemName}}</h2>
      <p class="problem-detail">{{singleProblem?.problemDescription}}</p>
    </section>
    <section class="problem-features">
      <a href={{singleProblem?.eulerProjectURL}}>View on Project Euler</a>
      <section class="problem-run">
        <h2 class="section-heading">
          Enter parameters for problem {{singleProblem?.id}} below, and click Solve.
        </h2>
        <div *ngIf="this.singleProblem?.formStyle == 'form-maxLimit'">
          <app-max-limit-form [singleProblem]="$any(singleProblem)"></app-max-limit-form>
        </div>
      </section>
    </section>
  </article>
  `,
  styleUrls: ['./problem-details.component.css']
})

export class ProblemDetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  eulerSolutionService = inject(EulerSolutionService);
  singleProblem: SingleProblem |  undefined;
  readonly problemFormStyle: string;

  constructor() {
    const eulerProblemId = Number(this.route.snapshot.params['id']);
    
    this.singleProblem = this.eulerSolutionService.getEulerProblemById(eulerProblemId);
    
    this.problemFormStyle = String(this.singleProblem?.formStyle);
  }
}
