import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-horizontal-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './small-horizontal-card.component.html',
  styleUrl: './small-horizontal-card.component.css'
})
export class SmallHorizontalCardComponent {
  @Input() image_url: string | null | undefined;
  @Input() title!: string ;
}
