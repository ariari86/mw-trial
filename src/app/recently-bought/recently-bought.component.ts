import { Component, OnInit } from '@angular/core';
import { RecentlyBoughtService } from '../services/recently-bought.service';

@Component({
  selector: 'app-recently-bought',
  templateUrl: './recently-bought.component.html',
  styleUrls: ['./recently-bought.component.scss']
})
export class RecentlyBoughtComponent implements OnInit {

  constructor(private recentlyBougthServie: RecentlyBoughtService) { }

  ngOnInit(): void {
    this.recentlyBougthServie.getRecentlyBought()
  }

}
