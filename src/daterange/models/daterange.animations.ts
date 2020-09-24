import {
    animate, animateChild, AnimationTriggerMetadata, group, query, state, style, transition, trigger
} from '@angular/animations';

export const daterangeAnimations: {
  readonly transformPanel: AnimationTriggerMetadata;
  readonly fadeInCalendar: AnimationTriggerMetadata;
} = {
    /** Transforms the height of the datepicker's calendar. */
    transformPanel: trigger('transformPanel', [
      state('void', style({ opacity: 0, transform: 'scale(1, 0)' })),
      state('enter', style({ opacity: 1, transform: 'scale(1, 1)' })),
      transition('void => enter', group([
        query('@fadeInCalendar', animateChild(), { optional: true }),
        animate('400ms cubic-bezier(0.25, 0.8, 0.25, 1)')
      ])),
      transition('* => void', animate('100ms linear', style({ opacity: 0 })))
    ]),

    /** Fades in the content of the calendar. */
    fadeInCalendar: trigger('fadeInCalendar', [
      state('void', style({ opacity: 0 })),
      state('enter', style({ opacity: 1 })),
      transition('void => *', animate('400ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)'))
    ])
  };
