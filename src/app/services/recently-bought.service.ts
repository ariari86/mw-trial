import { Injectable } from '@angular/core';
import { Product } from '@spartacus/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecentlyBoughtService {

  constructor() { }

  getRecentlyBought(): Observable<Product[]>{
    return
  }
}
