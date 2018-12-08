import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import {Images} from '../models/Images.model';
import {PhotosComponent} from '../photos/photos.component';
@Component({
  selector: 'app-p-profile',
  templateUrl: './p-profile.component.html',
  styleUrls: ['./p-profile.component.css']
})
export class PProfileComponent  {
  constructor() { }
  img1 = new Images('../../assets/images/work1.jpg');
  img2 = new Images('../../assets/images/work2.jpg');
  img3 = new Images('../../assets/images/work3.jpg');
  @Input()section: Number = 1;
  images: Images[] = [ this.img1, this.img2, this.img3 ];
  section_change(_section: Number) {
    this.section = _section;
  }
  }

