import { TransferService } from './../services/transfer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-statement',
  templateUrl: './list-statement.component.html',
  styleUrls: ['./list-statement.component.scss']
})
export class ListStatementComponent implements OnInit {
  toTransfers: any[] = [];

  constructor(private service: TransferService) { }

  ngOnInit(): void {
    this.toTransfers = this.service.transfers;
  }
}
