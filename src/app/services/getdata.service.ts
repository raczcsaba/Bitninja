import { Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from "rxjs";
import { environment } from '../../environments/environment';
import {Types} from "../interfaces/types";


@Injectable({
  providedIn: 'root'
})

export class GetdataService {

  getData(): Observable<Types> {
    return this.httpClient.get<Types>(`${environment.apiUrl}/posts/`,{
      observe: 'body',
      responseType: 'json',
    });
  }

  getPost(data:Types[], id:number): Observable<Types> {

    const item = data.find(h => h.id === id)!;
    return of(item);
  }


  constructor(private httpClient: HttpClient) { }
}
