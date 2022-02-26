import { Component, Input, OnInit } from '@angular/core';
import { Client } from '../../interfaces/client';

@Component({
  selector: 'app-client-list-item',
  templateUrl: './client-list-item.component.html',
  styleUrls: ['./client-list-item.component.scss'],
})
export class ClientListItemComponent implements OnInit {
  @Input() client: Client | undefined;

  constructor() {}

  ngOnInit(): void {}
}
