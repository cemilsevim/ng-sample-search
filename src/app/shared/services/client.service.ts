import { Injectable } from '@angular/core';
import { Client } from '../interfaces/client';
import { Clients } from '../mock/client';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  constructor() {}

  search(term: string): Client[] {
    term = term.toLowerCase();
    const clients = this.fetchClients();
    const foundClients = clients.filter(
      (client) =>
        client.name.toLowerCase().includes(term) ||
        client.policy_no.toLowerCase().includes(term)
    );

    return foundClients;
  }

  fetchClients(): Client[] {
    return Clients;
  }
}
