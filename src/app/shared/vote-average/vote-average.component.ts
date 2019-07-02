import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-vote-average',
  templateUrl: './vote-average.component.html',
  styleUrls: ['./vote-average.component.scss']
})
export class VoteAverageComponent {

  @Input() note: string;
  @Input() maxNote: string;

  constructor() { }

}
