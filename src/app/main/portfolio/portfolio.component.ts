import { Component, OnInit } from '@angular/core';

import { pageAppearTrigger } from '../pageAppearAnimation';
import { portfolioItemTrigger } from './portfolioItemsAnimation';

@Component({
  selector: 'dhws-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  animations: [
    pageAppearTrigger,
    portfolioItemTrigger
  ]
})
export class PortfolioComponent implements OnInit {
  items: string[] = [];
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.items.push('windigo');
      this.items.push('a warm fire');
      this.items.push('goatSpinner');
    }, 10)
  }

}
