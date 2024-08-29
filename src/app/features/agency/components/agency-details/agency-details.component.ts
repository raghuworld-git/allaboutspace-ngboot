import { Component, Input, OnInit } from '@angular/core';
import { AgencyService } from '../../agency.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { AgencyDetail } from '../../models/agency-detail.model';
import { SimpleStatisticCardComponent } from '@app/shared/components/simple-statistic-card/simple-statistic-card.component';
import { UnknownAlternativePipe } from '@app/shared/pipes/unknown-alternative.pipe';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SmallHorizontalCardComponent } from '@app/shared/components/small-horizontal-card/small-horizontal-card.component';
import { NoDataAvailableComponent } from '@app/shared/components/no-data-available/no-data-available.component';

@Component({
  selector: 'app-agency-details',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, SimpleStatisticCardComponent,NoDataAvailableComponent, SmallHorizontalCardComponent, UnknownAlternativePipe],
  templateUrl: './agency-details.component.html',
  styleUrl: './agency-details.component.css'
})
export class AgencyDetailsComponent implements OnInit {

  @Input("id") agencyId!: number;

  agencyDetails$!: Observable<AgencyDetail>;

  constructor(private agencyService: AgencyService) { }

  ngOnInit(): void {
    this.agencyDetails$ = this.agencyService.getAgencyDetails(this.agencyId);
  }
}
