import { trigger, animate, style, transition, state } from '@angular/animations';

export const lineTrigger = trigger('lineTrigger', [
    state('hidden', style({
        opacity: 0,
        color: 'red',
        transform: 'scale(0.1)'
    })),
    state('revealed', style({
        opacity: 1,
        color: 'white',
        transform: 'scale(1)'
    })),
    transition('hidden => revealed', [
        animate('100ms', style({
            opacity: 1,
            transform: 'scale(0.1)'
        })),
        animate('100ms', style({
            transform: 'scale(0.3)'
        })),
        animate('200ms', style({
            transform: 'scale(0.5)'
        })),
        animate('200ms', style({
            transform: 'scale(0.7)'
        })),
        animate('200ms', style({
            transform: 'scale(0.9)'
        })),
        animate('100ms', style({
            transform: 'scale(1)'
        }))
    ]),
    transition('revealed => hidden', [animate(500)])
]);
    