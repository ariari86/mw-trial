import {Component, OnInit} from '@angular/core';
import {ShotWithService} from './service/shot-with.service';
import {CurrentProductService} from '@spartacus/storefront';

@Component({
  selector: 'app-shot-with',
  templateUrl: './shot-with.component.html',
  styleUrls: ['./shot-with.component.scss']
})
export class ShotWithComponent implements OnInit {
  public shotWithImages$ = this.shotWithService.getShotWithImages();
  public currentProduct$ = this.currentProductService.getProduct();

  constructor(private shotWithService: ShotWithService, private currentProductService: CurrentProductService) {
  }

  ngOnInit(): void {
  }

}
