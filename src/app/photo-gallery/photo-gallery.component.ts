import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.css']
})
export class PhotoGalleryComponent implements OnInit {

  constructor(private _router: Router) { }

  goGallery(): void {
    this._router.navigate(['/gallery'])
  }

  ngOnInit() {
  }

}
