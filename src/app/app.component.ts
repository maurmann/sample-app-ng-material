import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  sideBarOpened: boolean = true;

  ngOnInit(): void {}

  toggleMenu(): void {
    this.sideBarOpened = !this.sideBarOpened;
  }
}
