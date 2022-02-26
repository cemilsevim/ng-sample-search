import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/shared/interfaces/client';
import { ClientService } from 'src/app/shared/services/client.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  clients: Client[] = [];

  constructor(private readonly clientService: ClientService) {}

  ngOnInit(): void {}

  onChange(value: string) {
    value = value.trim();

    if (value.length > 0) {
      this.clients = this.clientService.search(value);
    } else {
      this.clients = [];
    }
  }
}
