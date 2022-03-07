import { Injectable } from '@angular/core';
import {Types,Comments} from "../interfaces/types";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GetCommentsService {

  constructor(private httpClient: HttpClient) { }

  getComments(id:number): Observable<Comments> {
    return this.httpClient.get<Comments>(`${environment.apiUrl}/posts/${id}/comments`,{
      observe: 'body',
      responseType: 'json',
    });
  }

}
