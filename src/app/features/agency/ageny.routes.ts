import { Route } from "@angular/router";
import { AgencyListComponent } from "./components/agency-list/agency-list.component";
import { AgencyDetailsComponent } from "./components/agency-details/agency-details.component";

export const AGENCY_ROUTES: Route[] = [
    { path: '', component: AgencyListComponent },
    { path: ':id', component: AgencyDetailsComponent },
];