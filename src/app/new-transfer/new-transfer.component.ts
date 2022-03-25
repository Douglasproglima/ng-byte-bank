import { Component, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrls: ['./new-transfer.component.scss'],
})
export class NewTransferComponent {
  @Output() toTransfer = new EventEmitter<any>();

  value: number = 0;
  destiny: number;

  transfer() {
    console.log(`Valor: ${this.value} destino: ${this.destiny}`);

    const emitValue = { value: this.value, destiny: this.destiny };
    this.toTransfer.emit(emitValue);
  }
}
