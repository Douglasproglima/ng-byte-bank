import { Component, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrls: ['./new-transfer.component.scss'],
})
export class NewTransferComponent {
  @Output() toTransfer = new EventEmitter<any>();

  value: number = 0;
  destiny: string = "0000-0";

  transfer() {
    const emitValue = { value: this.value, destiny: this.destiny };
    this.toTransfer.emit(emitValue);
    this.clearFileds();
  }

  clearFileds() {
    this.value = 0;
    this.destiny = "0000-0";
  }
}
