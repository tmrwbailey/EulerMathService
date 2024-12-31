import { Routes } from '@angular/router';
import { ProblemsComponent } from './euler/problems/problems.component';
import { ProblemDetailsComponent } from './euler/problem-details/problem-details.component';
import { MaxLimitFormComponent } from './euler/problem-details/max-limit-form/max-limit-form.component';
import { IntroComponent } from './intro/intro.component'
import { CalculatorComponent } from './calc/calc.component';

const routeConfig: Routes = [
    {
        path: '',
        component: IntroComponent,
        title: 'Math'
    },
    {
        path: 'Calculator',
        component: CalculatorComponent,
        title: 'Calculator'
    },
    {
        path: 'Euler',
        component: ProblemsComponent,
        title: 'Euler'
    },
    {
        path: 'Euler/details/:id',
        component: ProblemDetailsComponent,
        title: 'Problem Details',
        /*children: [
            {
                path: 'form-maxLimit',
                component: MaxLimitFormComponent,
            },
            {
                path: 'form-minAndMaxLimit',
            },
            {
                path: 'form-textFieldDataInput',
            }
        ]*/
    }
];

export default routeConfig;
