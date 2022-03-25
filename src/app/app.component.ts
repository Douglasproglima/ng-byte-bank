import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-byte-bank';
  _transfer: any;

  transfer($event) {
    console.log($event);
    this._transfer = $event;
  };
}
