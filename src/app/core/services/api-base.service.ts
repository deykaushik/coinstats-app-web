import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Api } from "./api";


@Injectable({ providedIn: 'root' })
export class ApiBaseService extends Api {

  constructor(http: HttpClient) {
    const urlEndpoint = `${environment.baseUrl}/${environment.endpoint}`;
    super(http, urlEndpoint);
  }
}