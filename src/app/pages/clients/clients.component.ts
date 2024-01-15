import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IClient } from 'src/app/_interfaces/IClient';
import { ClientService } from 'src/app/_services/client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit{

  clients: IClient[] = [];
  clientsFromLocalStorage = localStorage.getItem('clients');
  @ViewChild('searchString') searchString!: ElementRef<HTMLInputElement>;

  constructor(private clientService: ClientService){}

  ngOnInit(): void {
    this.loadClients();
  }

  loadClients(){
    this.clients = this.clientService.clients;
  }

  searchClient(){
    const input = this.searchString.nativeElement.value;
    this.loadClients();
    const filteredClients = this.clients.filter((client) => {

      if(client.cpf.replaceAll('.', '').replaceAll('-', '').startsWith(input.replaceAll('.', '').replaceAll('-', ''))) {
        return client.cpf.replaceAll('.', '').replaceAll('-', '').startsWith(input.replaceAll('.', '').replaceAll('-', ''))
      }
      return client.nome.toLowerCase().includes(input.toLowerCase());
    });

    if(filteredClients.length > 0){
      this.clients = filteredClients;
    } else{
      this.clients = [];
    }
  }

  showNotFoundMessage(){
    return this.clientService.clients.length > 0;
  }

  deleteClient(cpf: string){
    this.clientService.deleteClient(cpf);
    this.loadClients();
    this.searchClient();
  }
}
