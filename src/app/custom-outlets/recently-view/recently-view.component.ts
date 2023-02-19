import { Component, OnInit } from '@angular/core';
import { RecentlyViewService } from '../services/recently-view.service';

@Component({
  selector: 'app-recently-view',
  templateUrl: './recently-view.component.html',
  styleUrls: ['./recently-view.component.scss']
})
export class RecentlyViewComponent implements OnInit {

  resetViewProducts$ = this.recentViewService.recentlyViewedproducts$

  constructor(private recentViewService: RecentlyViewService ){ }

  ngOnInit(): void {
  }

}
