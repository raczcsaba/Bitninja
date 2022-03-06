import { Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs";
import { environment } from '../../environments/environment';
import {Data} from "../interfaces/data";
import { groupBy, map, mergeMap, reduce } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class GetdataService {

  getData(): Observable<Data> {
    //const header = new HttpHeaders({ 'Host':'http://https://jsonplaceholder.typicode.com/posts/', });
    return this.httpClient.get<Data>(`${environment.apiUrl}/posts/`,{
      observe: 'body',
      responseType: 'json',
    });
  }

  constructor(private httpClient: HttpClient) { }
}
