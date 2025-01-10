import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map, tap, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class CalculationService {
    private baseUrl = environment.calcApiUrl;

    constructor(private http: HttpClient) { }

    add(num1: string, num2: string): Observable<string> {
        const params = new HttpParams()
            .set('Num1', num1)
            .set('Num2', num2);

        return this.http.get(`${this.baseUrl}/Addition`, { 
            params,
            responseType: 'text',            
            observe: 'response'
        }).pipe(
            tap(response => {
                console.log('Response received:', {
                    status: response.status,
                    headers: response.headers,
                    body: response.body
                });
            }),
            map(response => response.body ?? ''),
            catchError(error => {
                console.error('Request failed:', {
                    type: error.constructor.name,
                    message: error.message,
                    error
                });
                return throwError(() => error);
            })
        );
    }

    subtract(num1: string, num2: string): Observable<string> {
        const params = new HttpParams()
            .set('Num1', num1)
            .set('Num2', num2);

        return this.http.get(`${this.baseUrl}/Subtraction`, { 
            params,
            responseType: 'text',            
            observe: 'response'
        }).pipe(
            tap(response => {
                console.log('Response received:', {
                    status: response.status,
                    headers: response.headers,
                    body: response.body
                });
            }),
            map(response => response.body ?? ''),
            catchError(error => {
                console.error('Request failed:', {
                    type: error.constructor.name,
                    message: error.message,
                    error
                });
                return throwError(() => error);
            })
        );
    }

    multiply(num1: string, num2: string): Observable<string> {
        const params = new HttpParams()
            .set('Num1', num1)
            .set('Num2', num2);

        return this.http.get(`${this.baseUrl}/Multiplication`, { 
            params,
            responseType: 'text',            
            observe: 'response'
        }).pipe(
            tap(response => {
                console.log('Response received:', {
                    status: response.status,
                    headers: response.headers,
                    body: response.body
                });
            }),
            map(response => response.body ?? ''),
            catchError(error => {
                console.error('Request failed:', {
                    type: error.constructor.name,
                    message: error.message,
                    error
                });
                return throwError(() => error);
            })
        );
    }

    divide(num1: string, num2: string): Observable<string> {
        const params = new HttpParams()
            .set('Num1', num1)
            .set('Num2', num2);

        return this.http.get(`${this.baseUrl}/Division`, { 
            params,
            responseType: 'text',            
            observe: 'response'
        }).pipe(
            tap(response => {
                console.log('Response received:', {
                    status: response.status,
                    headers: response.headers,
                    body: response.body
                });
            }),
            map(response => response.body ?? ''),
            catchError(error => {
                console.error('Request failed:', {
                    type: error.constructor.name,
                    message: error.message,
                    error
                });
                return throwError(() => error);
            })
        );
    }

    addAsync(num1: string, num2: string): Observable<any> {
        return this.http.post(`${this.baseUrl}/AddAsync`, { num1, num2 });
    }

    checkStatus(requestId: string): Observable<any> {
        return this.http.get(`${this.baseUrl}/CheckStatus/${requestId}`);
    }
}
