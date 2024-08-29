import { Injectable } from "@angular/core";
import { GenericHttpClientService } from "@app/core/generic-http-client/generic-httpclient.service";
import { llSpaceDevResponse } from "@app/shared/models/llspacedev-response.model";
import { environment } from "@env";
import { Agency } from "./models/agency.model";
import { Observable, map } from "rxjs";
import { CountryUtilityService } from "@app/shared/services/country-utility.service";
import { AgencyDetail } from "./models/agency-detail.model";


@Injectable({
    providedIn: 'root'
})

export class AgencyService extends GenericHttpClientService {


    constructor(private countryUtilityService: CountryUtilityService) {
        super({
            baseUrl: environment.llSpacedevAPI,
            resourceName: 'agencies'
        })
    }

    getAgencyList(): Observable<llSpaceDevResponse<Agency>> {
        return this.list<llSpaceDevResponse<Agency>>(environment.production,
            { params: { 'featured': 'true', 'offset': '0', 'limit': '30' } },
            { key: `agency-list,featured` }
        ).pipe(map((data) => {
            let result = { ...data };
            result.results.forEach((item) => {
                item.country_name = this.countryUtilityService.getCountryNameByCode(item.country_code)!.country
            })
            return result;
        }))
    }

    getAgencyDetails(id: number): Observable<AgencyDetail> {
        return this.single<AgencyDetail>(
            id,
            environment.production,
            undefined,
            { key: `agency-details,agency-id:${id}` })
            .pipe(map(data => {
                let result = { ...data };
                result.country_name = this.countryUtilityService.getCountryNameByCode(result.country_code)?.country!;
                return result;
            }))
    }
}