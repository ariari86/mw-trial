import { Component, OnInit } from '@angular/core';
import { CurrentProductService } from '@spartacus/storefront';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss']
})
export class HelloWorldComponent implements OnInit {
  product$ = this.currentProductService.getProduct()

  constructor(private currentProductService: CurrentProductService) { }

  ngOnInit(): void {
  }

}
