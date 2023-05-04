import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  title = 'sample-app';
  opened: boolean = true;

  messages: string[] = [];

  ngOnInit(): void {
    this.messages.push('adriano');
    this.messages.push('lucio');
    this.messages.push('rebeschini');
    this.messages.push('maurmann');
  }

  toggleMenu(): void {
    this.opened = !this.opened;
  }
}
