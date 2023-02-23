import { Injectable } from '@angular/core';
import { IPicture } from '../interfaces/picture';
import {Observable} from 'rxjs'
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'https://picsum.photos'

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private http: HttpClient) { }

  getPicture(): Observable<IPicture[]> {
    return this.http.get<IPicture[]>(`${BASE_URL}/v2/list?limit=6`)
  }
}
