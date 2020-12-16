import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConverterService} from '@spartacus/core';
import {Observable} from 'rxjs';
import {IMAGES_NORMALIZER} from './shot-with.converter';

@Injectable({
  providedIn: 'root'
})
export class ShotWithService {
  constructor(private http: HttpClient, protected converter: ConverterService) {
  }

  getShotWithImages(): Observable<any> {
    return this.http
      .get(`https://picsum.photos/v2/list?page=4&limit=6`)
      .pipe(
        this.converter.pipeable(IMAGES_NORMALIZER)
      );
  }
}
