import { Component, Input } from '@angular/core';

@Component({
  selector: 'star-rating',
  template: `
    <div style="display: flex; gap: 1rem; ">
      <span *ngFor="let _ of starsArray; let i = index">
        <ng-container *ngIf="i < rating; else name">
          <img [ngClass]="{ filled: i < rating }" src="./assets/pet_paw.svg" />
        </ng-container>
        <ng-template #name>
          <img
            [ngClass]="{ filled: i >= rating }"
            src="./assets/pet_paw_unfilled.svg"
          />
        </ng-template>
      </span>
    </div>
  `,
})
export class StarsComponent {
  @Input() rating: number = 0;

  starsArray: number[] = [1, 2, 3, 4, 5];
}
