import { Injectable } from "@angular/core";
import { COUNTRY_LIST } from "../data/country-code.data";

@Injectable({
    providedIn: 'root'
})
export class CountryUtilityService {

    getCountryNameByCode(code: string) {
        return COUNTRY_LIST.find((item) => {
            return item.code == code
        })
    }
}