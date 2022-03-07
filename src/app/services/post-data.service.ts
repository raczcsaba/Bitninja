import { Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from "rxjs";
import { environment } from '../../environments/environment';
import {Types} from "../interfaces/types";

@Injectable({
  providedIn: 'root'
})
export class PostDataService {

  constructor(private httpClient: HttpClient) { }

  postData(item:Types): Observable<any>{
    return this.httpClient.post(`${environment.apiUrl}/posts`,item);
  }
}
