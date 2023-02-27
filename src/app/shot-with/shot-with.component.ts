import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { IPicture } from '../interfaces/picture';

const BASE_URL = 'https://picsum.photos'

@Component({
  selector: 'app-shot-with',
  templateUrl: './shot-with.component.html',
  styleUrls: ['./shot-with.component.scss']
})
export class ShotWithComponent implements OnInit, OnDestroy {
  product$ = this.getGivenCamera()
  private interval$ = new Subscription()

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.interval$ = interval(20000).subscribe(()=> {
      this.product$ = this.getGivenCamera()
    })
  }

  getGivenCamera(): Observable<IPicture[]>{
    return this.http.get<IPicture[]>(`${BASE_URL}/v2/list?limit=12`)
  }

  ngOnDestroy(): void {
    this.interval$.unsubscribe()
  }
}
