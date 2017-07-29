import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { changePageToPortfolio, changePageToWriting, changePageToAbout, changePageToContact } from './changePageAnimation';

@Component({
  selector: 'dhws-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  animations: 
    [changePageToPortfolio, changePageToWriting, changePageToAbout, changePageToContact]
})
export class LandingComponent implements OnInit {
  @ViewChild("portfolio") portfolioElement: ElementRef;

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

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
