import { Component, OnInit } from '@angular/core';
import { AutoLogoutService } from './session/auto-logout.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'mw-trial';

  constructor(private autoLogoutService: AutoLogoutService) {}

  ngOnInit(): void {
    this.autoLogoutService.init()
  }
}
