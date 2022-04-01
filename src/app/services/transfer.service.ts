import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferService {
  private transferList: any[];

  constructor() {
    this.transferList = [];
  }

  get transfers(): any[] {
    return this.transferList;
  }

  public add(transfer: any): void {
    this.initializeData(transfer);
    this.transferList.push(transfer);
  }

  private initializeData(transfer: any): void {
    transfer.data = new Date();
  }
}
