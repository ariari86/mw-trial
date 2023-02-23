import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface IPicture {
  id: number
  author:string
  width: number
  height: number
  url: string
  download_url: string
}

const BASE_URL = 'https://picsum.photos'

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private http: HttpClient) { }

  getPicture(): Observable<IPicture[]>{
    return this.http.get<IPicture[]>(`${BASE_URL}/v2/list?limit=6`)
  }
}
