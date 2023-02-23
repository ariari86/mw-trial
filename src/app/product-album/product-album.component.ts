import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../services/album.service';

@Component({
  selector: 'app-product-album',
  templateUrl: './product-album.component.html',
  styleUrls: ['./product-album.component.scss']
})
export class ProductAlbumComponent implements OnInit {
  pictures$ = this.albumService.getPicture()

  constructor(private albumService: AlbumService) { }

  ngOnInit(): void {
  }

}
