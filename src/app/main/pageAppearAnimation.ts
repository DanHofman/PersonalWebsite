import { trigger, state, animate, style, transition } from '@angular/animations';

export const pageAppearTrigger = trigger('pageAppearTrigger', [
    transition(':enter', [
        style({
            opacity: '0.1'
        }),
        animate('500ms ease-out', style({opacity: '1'}))
])]);

// export const portfolioItemTrigger = trigger('portfolioItemTrigger', [
//     transition(':enter', [
//         style({
//             transform: 'translateY(-500px)',
//             color: 'blue',
//             display: 'none'
//         }),
//         animate('5000ms ease-in', style({transform: 'translateY(0px)'}))
//     ])
// ]);