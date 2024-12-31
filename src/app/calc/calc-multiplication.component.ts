import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CalculationService } from '../services/calculation.service';
import { firstValueFrom } from 'rxjs';

@Component({
    selector: 'app-calc-multiplication',
    standalone: true,
    template: '<button (click)="submitMultiplication()" class="operation-btn">x</button>',
    styleUrls: ['./calc.component.css']
})
export class MultiplicationComponent {
    @Input() num1: string = '';
    @Input() num2: string = '';
    result: string = "";
    @Output() resultChange = new EventEmitter<string>();

    constructor(private calcService: CalculationService) { }

    async submitMultiplication() {
        try {
            this.result = await firstValueFrom(this.calcService.multiply(this.num1, this.num2));
        } catch (error: any) {
            console.error('Full error object:', error);
            
            if (error.error) {
                // Handle HTTP error response
                this.result = typeof error.error === 'string' ? error.error : JSON.stringify(error.error);
            }
            else {
                // Handle other types of errors
                this.result = error.message || 'Unknown error occurred';
            }
        }
        this.resultChange.emit(this.result);
    }
}