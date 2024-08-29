import { Component, Input } from '@angular/core';
import { UnknownAlternativePipe } from '@app/shared/pipes/unknown-alternative.pipe';

@Component({
  selector: 'app-simple-statistic-card',
  standalone: true,
  imports: [],
  templateUrl: './simple-statistic-card.component.html',
  styleUrl: './simple-statistic-card.component.css'
})
export class SimpleStatisticCardComponent { 
  @Input() text: string = "";
}
