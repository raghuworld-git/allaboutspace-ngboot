import { HttpClient } from "@angular/common/http";
import { inject } from "@angular/core";
import { Observable } from "rxjs";
import { HttpConfig, HttpGetListOptions, HttpGetSingleOptions, HttpMethod } from "./generic-rest.types";
import { extractRequestOptions, mapResponse, resolveUrl } from "./generic-rest.utils";
import { withCache } from "@ngneat/cashew";
import { ContextOptions } from "@ngneat/cashew/lib/cache-context";

/* 
 Below is the URL from where the code for Generic HTTP client  was extracted
 https://github.com/jm-1997/ngx-generic-rest-service/blob/master/packages/ngx-grs/src/lib/ngx-generic-rest.service.ts

 Below is the URL from where cashing library was downloaded
 https://github.com/ngneat/cashew
 
*/
export class GenericHttpClientService {

    #httpClient = inject(HttpClient);

    constructor(protected httpConfig: HttpConfig) {
        this.httpConfig = httpConfig;
    }

    private get url(): string {
        const { baseUrl, resourceName } = this.httpConfig;
        return `${baseUrl}/${resourceName}`;
    }

    list<TResponse>(isProd: boolean, options?: HttpGetListOptions, cacheOptions?: ContextOptions): Observable<TResponse> {
        const method: HttpMethod = 'GET';
        const url = resolveUrl(this.url, options);
        const requestOptions = extractRequestOptions(options);
        return this.#httpClient.request<ResponseType>(
            method,
            url,
            {
                ...requestOptions,
                context: isProd ? withCache(cacheOptions) : undefined
            }
        )
            .pipe(mapResponse(options));
    }

    single<TResponse>(id: string | number, isProd: boolean, options?: HttpGetSingleOptions, cacheOptions?: ContextOptions,): Observable<TResponse> {
        const method: HttpMethod = 'GET';
        const url = resolveUrl(this.url, options, id.toString());
        const requestOptions = extractRequestOptions(options);

        return this.#httpClient.request<ResponseType>(method, url, {
            ...requestOptions,
            context: isProd ? withCache(cacheOptions) : undefined
        }).pipe(mapResponse(options));
    }
}
