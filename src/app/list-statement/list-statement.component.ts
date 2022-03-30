import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-statement',
  templateUrl: './list-statement.component.html',
  styleUrls: ['./list-statement.component.scss']
})
export class ListStatementComponent implements OnInit {
  @Input() getTransfers: Array<any> = [];

  constructor() {}

  ngOnInit(): void { }
}
