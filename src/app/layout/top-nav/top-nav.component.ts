import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { DateTimeUtilityService } from '@app/shared/services/datetime-utility.service';

@Component({
  selector: 'app-top-nav',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './top-nav.component.html',
  styleUrl: './top-nav.component.css'
})
export class TopNavComponent {

  browserTimeZone: string = '';
  constructor(private datetimeService: DateTimeUtilityService) {
    this.browserTimeZone = datetimeService.getBrowserTimeZone();
  }

}
