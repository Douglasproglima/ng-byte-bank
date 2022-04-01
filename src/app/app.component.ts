import { TransferService } from './services/transfer.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-byte-bank';

  constructor(private service: TransferService) { }

  public transfer($event) {
    this.service.add($event);
  };
}
