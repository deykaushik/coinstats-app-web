import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
export type ParamsType = { [key: string]: string };

export class Api {
  constructor(private http: HttpClient, private baseUrl: string) {}

  get<T>(
    id: string,
    url: string,
    queryParams?: ParamsType,
    routeParams?: ParamsType,
    additionalHeaders?: ParamsType
  ) {
    const routeUrl = routeParams ? this.createRouteUrl(url, routeParams) : url;
    const params = queryParams
      ? this.createQueryParams(queryParams)
      : undefined;
    const headers = additionalHeaders
      ? this.createHeaders(additionalHeaders)
      : undefined;

    const options = { params, headers };

    return this.http.get(
      `${this.baseUrl}/${routeUrl}/${id}`,
      options
    ) as Observable<T>;
  }

  getAll<T>(
    url: string,
    queryParams?: ParamsType,
    routeParams?: ParamsType,
    additionalHeaders?: ParamsType
  ): Observable<T> {
    const routeUrl = routeParams ? this.createRouteUrl(url, routeParams) : url;
    const params = queryParams
      ? this.createQueryParams(queryParams)
      : undefined;
    const headers = additionalHeaders
      ? this.createHeaders(additionalHeaders)
      : undefined;

    const options = { params, headers };
    return this.http.get(
      `${this.baseUrl}/${routeUrl}`,
      options
    ) as Observable<T>;
  }

  create(
    url: string,
    payload: any,
    queryParams?: ParamsType,
    routeParams?: ParamsType,
    additionalHeaders?: ParamsType
  ): Observable<any> {
    const routeUrl = routeParams ? this.createRouteUrl(url, routeParams) : url;
    const params = queryParams
      ? this.createQueryParams(queryParams)
      : undefined;
    const headers = additionalHeaders
      ? this.createHeaders(additionalHeaders)
      : undefined;

    const options = { params, headers };
    return this.http.post(`${this.baseUrl}/${routeUrl}`, payload, options);
  }

  update(
    url: string,
    payload: any,
    queryParams?: ParamsType,
    routeParams?: ParamsType,
    additionalHeaders?: ParamsType
  ): Observable<any> {
    const routeUrl = routeParams ? this.createRouteUrl(url, routeParams) : url;
    const params = queryParams
      ? this.createQueryParams(queryParams)
      : undefined;
    const headers = additionalHeaders
      ? this.createHeaders(additionalHeaders)
      : undefined;

    const options = { params, headers };
    return this.http.put(`${this.baseUrl}/${routeUrl}`, payload, options);
  }

  createHeaders(additionalHeaders: ParamsType): HttpHeaders {
    let headers = new HttpHeaders();
    for (const key in additionalHeaders) {
      headers = headers.set(key, additionalHeaders[key]);
    }
    return headers;
  }

  createRouteUrl(url: string, routeParams: ParamsType) {
    for (const key in routeParams) {
      url = url.replace(`:${key}`, routeParams[key]);
    }
    return url;
  }

  createQueryParams(routeParams: ParamsType) {
    let params = new HttpParams();
    for (const key in routeParams) {
      params = params.append(key, routeParams[key]);
    }
    return params;
  }
}
