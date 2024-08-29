import { Component, OnInit } from '@angular/core';
import { AgencyService } from '../../agency.service';
import { Observable } from 'rxjs';

import { Agency } from '../../models/agency.model';
import { CommonModule } from '@angular/common';
import { llSpaceDevResponse } from '@app/shared/models/llspacedev-response.model';;
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-agency-list',
  standalone: true,
  imports: [
    CommonModule, 
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './agency-list.component.html',
  styleUrl: './agency-list.component.css'
})
export class AgencyListComponent implements OnInit {

  agencyList$!: Observable<llSpaceDevResponse<Agency>>;

  constructor(private agencyService: AgencyService) { }

  ngOnInit(): void {
    this.agencyList$ = this.agencyService.getAgencyList();
  }

}
