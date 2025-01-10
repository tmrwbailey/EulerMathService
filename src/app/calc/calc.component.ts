import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CalculationService } from '../services/calculation.service';
import { AdditionComponent } from './calc-addition.component';
import { SubtractionComponent } from './calc-subtraction.component';
import { MultiplicationComponent } from './calc-multiplication.component';
import { DivisionComponent } from './calc-division.component';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AdditionComponent,
    SubtractionComponent,
    MultiplicationComponent,
    DivisionComponent
  ],
  template: `
    <section class="paragraph-text">
      <p>
        This is a calculator. It will behave like any large precision calculator until you start to divide
        by something other than powers of 2. When you do that this machine will not ever give up on giving
        you a perfectly precise answer. In many cases, this will take a while.
      </p>
      <br/>
      <p>  
        Keep in mind that entering any number with a decimal constitutes dividing by powers of 10, which
        includes factors of 5, which are not powers of two.
      </p>
      <br/>
      <p>  
        Some operations may break the service and give you a server error instead of an answer, because
        the request required more than available resources to provide a perfectly precise answer.
      </p>
      <br/>
      <p>  
        Because the full precision can be so sluggish, I have also built in truncated precision arithmatic,
        because for almost every real life decimal math application there is some level of precision which
        is good enough. This truncated arithmatic is not fully debugged yet. But hopefully I will release it
        here soon.
      </p>
    </section>
    <div class="calculator">
      <div class="input-group">
        <textarea [(ngModel)]="operand1" placeholder="Enter first number" class="large-input" rows="10"></textarea>
        <textarea [(ngModel)]="operand2" placeholder="Enter second number" class="large-input" rows="10"></textarea>
      </div>
      <div class="operations-column">
        <app-calc-addition
          [num1]="operand1"
          [num2]="operand2"
          (resultChange)="onResultChange($event)">
        </app-calc-addition>
        <app-calc-subtraction
          [num1]="operand1"
          [num2]="operand2"
          (resultChange)="onResultChange($event)">
        </app-calc-subtraction>
        <app-calc-multiplication
          [num1]="operand1"
          [num2]="operand2"
          (resultChange)="onResultChange($event)">
        </app-calc-multiplication>
        <app-calc-division
          [num1]="operand1"
          [num2]="operand2"
          (resultChange)="onResultChange($event)">
        </app-calc-division>
      </div>
      <div class="result-group">
        <textarea [value]="result" readonly placeholder="Result" class="large-input" rows="10"></textarea>
      </div>
    </div>
  `,
  styleUrls: ['./calc.component.css', '../app.component.css']
})
export class CalculatorComponent {
    calcAdditionService = inject(CalculationService);
    operand1: string = '';
    operand2: string = '';
    result: string = '';

    constructor() { }

    onResultChange(result: string) {
        this.result = result;
    }
}
