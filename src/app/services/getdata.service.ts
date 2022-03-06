import { Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from "rxjs";
import { environment } from '../../environments/environment';
import {Data} from "../interfaces/data";


@Injectable({
  providedIn: 'root'
})

export class GetdataService {

  getData(): Observable<Data> {
    return this.httpClient.get<Data>(`${environment.apiUrl}/posts/`,{
      observe: 'body',
      responseType: 'json',
    });
  }

  getPost(data:Data[],id:number): Observable<Data> {

    const item = data.find(h => h.id === id)!;
    return of(item);
  }


  constructor(private httpClient: HttpClient) { }
}
