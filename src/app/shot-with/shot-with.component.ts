import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { IPicture } from '../interfaces/picture';

const BASE_URL = 'https://picsum.photos'

@Component({
  selector: 'app-shot-with',
  templateUrl: './shot-with.component.html',
  styleUrls: ['./shot-with.component.scss']
})
export class ShotWithComponent implements OnInit {
  product$ = this.getGivenCamera()

  constructor(private http: HttpClient) {
    interval(20000).subscribe(()=> {
      this.product$ = this.getGivenCamera()
    })
  }

  ngOnInit(): void {
  }

  getGivenCamera(): Observable<IPicture[]>{
    return this.http.get<IPicture[]>(`${BASE_URL}/v2/list?limit=12`)
  }
}
