import { Component, OnInit } from '@angular/core';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'
import { faSkullCrossbones } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-information-bar',
  templateUrl: './information-bar.component.html',
  styleUrls: ['./information-bar.component.scss']
})
export class InformationBarComponent implements OnInit {
  faWindowClose = faWindowClose
  faSkullCrossbones = faSkullCrossbones
  isCollapsed: boolean = true

  constructor() { }

  ngOnInit(): void {
  }

  closeButton(){
    this.isCollapsed = false
  }

}
