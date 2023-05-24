import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUrl } from '../_global-consts';
import { ResponseAPI } from '../_global-type';

@Injectable({
  providedIn: 'root',
})
export class ListOfBreedsService {
  constructor(private httpClient: HttpClient) {}

  public getList(): Observable<ResponseAPI> {
    return this.httpClient.get<ResponseAPI>(`${apiUrl}breeds/list/all`);
  }

  public geSubtList(breed: string): Observable<ResponseAPI> {
    return this.httpClient.get<ResponseAPI>(`${apiUrl}breed/${breed}/list`);
  }

  public getImg(breed: string): Observable<ResponseAPI> {
    return this.httpClient.get<ResponseAPI>(
      `${apiUrl}breed/${breed}/images/random`
    );
  }
}
