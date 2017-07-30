import { state, trigger, animate, style, transition } from '@angular/animations';

export const revealDescriptionTrigger = trigger('revealDescriptionTrigger', [
    state('hidden', style({
        opacity: 0,
        color: 'red',
        transform: 'translateX(10px)'
    })),
    state('revealed', style({
        opacity: 1
    })),
    transition('hidden => revealed', [
        animate('200ms', style({
            opacity: 0.3,
            color: 'firebrick',
            transform: 'scale(1.02) translateX(0px)'
        })),
        animate('100ms', style({
            opacity: 0.7,
            color: 'red',
            transform: 'scale(1.02) translateX(-5px)'
        })),
        animate('200ms', style({
            opacity: 0.9,
            color: 'black',
            transform: 'scale(1) translateX(0px)'
        }))]),
    transition('revealed => hidden', animate(500))
]);