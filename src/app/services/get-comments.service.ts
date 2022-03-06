import { Injectable } from '@angular/core';
import {Data,Comments} from "../interfaces/data";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GetCommentsService {

  getComments(id:number): Observable<Comments> {
    return this.httpClient.get<Comments>(`${environment.apiUrl}/posts/${id}/comments`,{
      observe: 'body',
      responseType: 'json',
    });
  }

  constructor(private httpClient: HttpClient) { }
}