import { trigger, state, animate, style, transition } from '@angular/animations';

export const portfolioItemTrigger = trigger('portfolioItemTrigger', [
    transition(':enter', [
        style({
            transform: 'translateY(-500px) rotate(180deg)',
        }),
        animate('500ms ease-in', style({transform: 'translateY(150px) rotate(-45deg)'})),
        animate('100ms ease-in', style({transform: 'translateY(0px) rotate(0deg)'}))
    ])]);