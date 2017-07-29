import { transition, state, trigger, style, animate } from '@angular/animations';

export const changePageToPortfolio = trigger('changePagePortfolio', [
    state("leaving", style({

    })),
    state("noChange", style({

    })),
    transition('noChange => leaving', [animate('200ms ease-out',
        style({transform: 'translateX(500%) translateY(170%)'})),
        animate('300ms ease-out',
        style({
            transform: 'translateX(650px) scale(6)'
        }))])
]);
export const changePageToWriting = trigger('changePageWriting', [
    state("leaving", style({

    })),
    state("noChange", style({

    })),
    transition('noChange => leaving', [style({transform: 'scale(5)'}), animate('500ms')])
]);
export const changePageToAbout = trigger('changePageAbout', [
    state("leaving", style({

    })),
    state("noChange", style({

    })),
    transition('noChange => leaving', [style({transform: 'scale(5)'}), animate('500ms')])
]);
export const changePageToContact = trigger('changePageContract', [
    state("leaving", style({

    })),
    state("noChange", style({

    })),
    transition('noChange => leaving', [style({transform: 'scale(5)'}), animate('500ms')])
]);
