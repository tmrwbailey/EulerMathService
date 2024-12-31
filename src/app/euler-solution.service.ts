import { Injectable } from '@angular/core';
import { SingleProblem, SolverFormStyle } from './single-problem';
import { FormStyle } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class EulerSolutionService {

  //This service is currently a stub, providing problem details manually rather
  //than actually pulling from the Euler problem service in the Math Engine.

  constructor() { }

  readonly rootURL = 'https://projecteuler.net'

  singleProblemList: SingleProblem[] = [
    {
      id: 1,
      problemName: 'Multiples of 3 or 5',
      eulerProjectURL: `${this.rootURL}/problem=1`,
      problemDescription: `If we list all the natural numbers below 10 that are
        multiples of 3 or 5, we get 3, 5, 6, and 9. The sum of these multiples is
        23.
        Find the sum of all the multiples of 3 or 5 below 1000.`,
      problemDataString: '',
      problemAnswer: 233168,
      problemDiscussionURL: `${this.rootURL}/thread=1`,
      formStyle: SolverFormStyle.MaxLimit,
    },
    
    {
      id: 2,
      problemName: 'Even Fibonacci Numbers',
      eulerProjectURL: `${this.rootURL}/problem=2`,
      problemDescription: `Each new term in the Fibonacci sequence is generated
        by adding the previous two terms. By starting with 1 and 2, the first 10
        terms will be:
        1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
        By considering the terms in the Fibonacci sequence whose values do not
        exceed four million, find the sum of the even-valued terms.`,
      problemDataString: '',
      problemAnswer: 4613732,
      problemDiscussionURL: `${this.rootURL}/thread=2`,
      formStyle: SolverFormStyle.MaxLimit,
    },

    {
      id: 3,
      problemName: 'Largest Prime Factor',
      eulerProjectURL: `${this.rootURL}/problem=3`,
      problemDescription: `The prime factors of 13195 are 5, 7, 13, and 29.
        What is the largest prime factor of the number 600851475143?`,
      problemDataString: '',
      problemAnswer: 6857,
      problemDiscussionURL: `${this.rootURL}/thread=3`,
      formStyle: SolverFormStyle.MaxLimit,
    },
    
    {
      id: 4,
      problemName: 'Largest Palindrome Product',
      eulerProjectURL: `${this.rootURL}/problem=4`,
      problemDescription: `A palindromic number reads the same both ways.
        The largest palindrome made from the product of two 2-digit numbers is
        9009 = 91 X 99.
        Find the largest palindrome made from the product of two 3-digit numbers.`,
      problemDataString: '',
      problemAnswer: 906609,
      problemDiscussionURL: `${this.rootURL}/thread=4`,
      formStyle: SolverFormStyle.MaxLimit,
    },
  ]

  getAllEulerProblems(): SingleProblem[] {
    return this.singleProblemList;
  }
  
  getEulerProblemById(id: number): SingleProblem | undefined {
    return this.singleProblemList.find(sP => sP.id === id);
  }

  getSolvedEulerProblems(): SingleProblem[] {
    return this.singleProblemList.filter(sP => sP.problemAnswer != undefined)
  }

  getUnsolvedEulerProblems(): SingleProblem[] {
    return this.singleProblemList.filter(sP => sP.problemAnswer == undefined)
  }

  runSolver(problemId: number, maxLimit: number, minLimit?: number){
    console.log(`Solver parameters received: problemId: ${problemId},
    maxLimit: ${maxLimit}.`);
    if (minLimit != undefined){
      console.log(`Solver parameters received: problemId: ${problemId},
      maxLimit: ${maxLimit}, mminLimit: ${minLimit}.`);
    }
  }
}
