import { Component, OnInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

import { changePageToPortfolio, changePageToWriting, changePageToAbout, changePageToContact } from './changePageAnimation';

import { revealDescriptionTrigger } from './descriptionAppearAnimation';

@Component({
  selector: 'dhws-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  animations: 
    [changePageToPortfolio, changePageToWriting, changePageToAbout, changePageToContact, revealDescriptionTrigger]
})
export class LandingComponent {
  @ViewChild("portfolio") portfolioElement: ElementRef;
  // @ViewChild("nameDescription") nameDescription: ElementRef;
  descriptionRevealedState: string = 'hidden';

  constructor(private router: Router, private renderer: Renderer2) { }

  linkStates: Object = 
    {portfolio: 'noChange',
    writing:'noChange',
    about: 'noChange', 
    contact: 'noChange'};

  // linkTransformValues: Object[] = [
  //   {'porfolio': ['500px', '300px']},
  //   {'writing':['-500px', '300px']}, 
  //   {'about': ['500px', '-300px']}, 
  //   {'contact': ['-500px', '-300px']}];

  changePage(page) {
    console.log("changing to " + page);
    this.linkStates[page] = 'leaving';
    setTimeout(() => {
      this.router.navigate([page]);
    }, 500);
  }


}
