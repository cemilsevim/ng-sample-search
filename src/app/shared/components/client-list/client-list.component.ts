import { Component, Input, OnInit } from '@angular/core';
import { Client } from '../../interfaces/client';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss'],
})
export class ClientListComponent implements OnInit {
  @Input() clients: Client[] | undefined;

  constructor() {}

  ngOnInit(): void {}
}
