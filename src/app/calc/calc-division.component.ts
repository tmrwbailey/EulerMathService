import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CalculationService } from '../services/calculation.service';
import { firstValueFrom } from 'rxjs';

@Component({
    selector: 'app-calc-division',
    standalone: true,
    template: '<button (click)="submitDivision()" class="operation-btn">÷</button>',
    styleUrls: ['./calc.component.css']
})
export class DivisionComponent {
    @Input() num1: string = '';
    @Input() num2: string = '';
    result: string = "";
    @Output() resultChange = new EventEmitter<string>();

    constructor(private calcService: CalculationService) { }

    async submitDivision() {
        // Start the calculation immediately
        const divisionPromise = this.calcService.divide(this.num1, this.num2);
        
        // Post friendly message while waiting
        this.resultChange.emit('Calculating...');
        
        try {
            this.result = await firstValueFrom(divisionPromise);
            // Clear the waiting message by emitting the actual result
            this.resultChange.emit(this.result);
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