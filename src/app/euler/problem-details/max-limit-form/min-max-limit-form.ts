import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { EulerSolutionService } from '../../../euler-solution.service';
import { SingleProblem } from '../../../single-problem';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-min-max-limit-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  template: `
  <form [formGroup]="solverParamForm" (submit)="runSolver()">
    <label for="max-limit">Maximum Limit</label>
    <input id="max-limit" type="number" formControlName="maxLimit">
    <label for="min-limit">Minimum Limit</label>
    <input id="min-limit" type="number" formControlName="minLimit">
    <button type="submit" class="primary">Solve</button>
  </form>
  `,
  styleUrls: ['../problem-details.component.css']
})
export class MinMaxLimitFormComponent {
  @Input() singleProblem!: SingleProblem;
  route: ActivatedRoute = inject(ActivatedRoute);
  eulerSolutionService: EulerSolutionService = inject(EulerSolutionService);
  
  solverParamForm = new FormGroup(
    {
      maxLimit: new FormControl('', [
        Validators.required,
        Validators.pattern("^[0-9]*$"),
      ]),
      minLimit: new FormControl('', [
        Validators.required,
        Validators.pattern("^[0-9]*$"),
      ]),
    }
  );

  runSolver(){
    this.eulerSolutionService.runSolver(this.singleProblem.id, Number(this.solverParamForm.value.maxLimit), Number(this.solverParamForm.value.minLimit));
  }
}
