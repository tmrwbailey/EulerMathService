import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EulerSolutionService } from '../euler-solution.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
  ],
  template: `
    <section class="paragraph-text">
      <p>
        Welcome to my portfolio website! This is where I am posting projects I have done for fun to serve
        as a demo for prospective employers or partners. If you find it useful for anything more than that,
        then I am just thrilled for you.
      </p>
      <div>
      <br/>
      </div>
      <h1> Extreme Precision Calculator with Repeating Decimal Representation </h1>
      <p>
        This calculator has theoretically infinite precision. That is, the programmatic precision limit is,
        more than 100 petabytes, so process memory is the true limit on number size. When dividing, the
        calculator will automatically reduce the number of decimal places to the minimum required to 
        represent the result with a repeating decimal.
      </p>
      <br/>
      <p>  
        I took on this project for fun, without any prior mathematical research to find optimal algorithms,
        or to discover why such a calculator was not already available. The point was to challenge myself,
        refresh my skills after a sabbatical from my field, and experiment with technology I had not used
        much, if at all.
      </p>
      <br/>
      <p>  
        I found that in fact, using this kind of digital repeating decimal quickly becomes a sluggish beast.
        My intution was that large prime number denominators would likely yield repeating decimal bits near
        the square root of the prime denominator, and that composite numbers would have somewhat smaller
        repeating decimals, with powers of two of course requiring no repeating decimal.
      </p>
      <br/>
      <p>  
        Instead, I found that composite denominators (n) can have binary repeating decimals around n bits!
        This is bad, but finding this period of repition in a division operation is a much heavier
        computational and memory burden. So, ultimately, this project is fun to play with, but not very
        useful. Rational digital representation is definitely more practical.
      </p>
      <a routerLink="/Calculator">Play with the Extreme Precision Calculator!</a>
      <div>
      <br/>
      </div>
      <h1> Euler Project Solvers </h1>
      <p>
        If you love math and programming, and you have not heard of Project Euler, well, today is a very
        good day for you! Go visit <a href="https://projecteuler.net">the site</a> to see what it's about.
        This site challenges you with hundreds of questions which cannot be solved practically without some
        level of mathematical analysis AND some writing some code. Several of the first problems are suitable
        for any run-of-the-mill coder with a few minutes to spare. But if you look beyond the first 100 problems,
        you'll find something that requires a mathematician and engineer.
      </p>
      <br/>
      <p>  
        A website is not the place to run solvers for these problems. First, it's not cool to put the answers to
        these questions out in the wild. It kind of ruins the fun if people can cheat and get the answes online.
        Second, as you're trying to work out a solution, you will be doing a lot of debugging. You don't need a
        lot of UI for that process. A website with calls to a web service is certainly a ridulous burden to add
        with no benefit other than showing off. But showing off is exactly what I'm up to here.
      </p>
      <br/>
      <p>  
        I also wanted to try out some angular features, like dynamic form generation. And my work (play) on this
        site just happened to be at hand. So to avoid ruining the fun, I am only posting some of the earlier and
        easier problems. And I'm also asking you to please not post these answers anywhere else, or to use them
        to buff up your own Project Euler profile.
      </p>
      <br/>
      <p>  
        This part of the site is currently under construction. Please forgive my mess.
      </p>
      <a routerLink="/Euler">Euler Project - Under Construction</a>
    </section>
  `,
  styleUrls: ['./intro.component.css', '../app.component.css']
})
export class IntroComponent {
  eulerSolutionService = inject(EulerSolutionService);

  constructor(){
  }
}
