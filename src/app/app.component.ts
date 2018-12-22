import { Component, OnInit } from '@angular/core';
import { AuthencationService } from './authencation.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'photophia';
  constructor(private ats: AuthencationService) {
  }
  ngOnInit() {
  }
}
