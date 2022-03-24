import { Component } from '@angular/core';

@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrls: ['./new-transfer.component.scss'],
})
export class NewTransferComponent {
  value: number = 0;
  destiny: number;

  transfer() {
    console.log(`Valor: ${this.value} destino: ${this.destiny}`);
  }
}