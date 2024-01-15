import { Injectable, OnInit } from "@angular/core";
import { IClient } from "../_interfaces/IClient";

@Injectable({
  providedIn: 'root'
})
export class ClientService{

  clients: IClient[] = [];
  clientsFromLocalStorage = localStorage.getItem('clients');

  init(){
    if(this.clientsFromLocalStorage) {
      this.clients = JSON.parse(this.clientsFromLocalStorage);
    }
  }

  addClients(clientToBeAdded: IClient){
    this.clients.push(clientToBeAdded);
    localStorage.setItem('clients', JSON.stringify(this.clients));
  }

  clientExists(client: IClient): boolean{
    const clientExistsAlready = this.clients.find(c => c.cpf === client.cpf);
    if(clientExistsAlready) {
      return true;
    }
    return false;
  }

  deleteClient(cpf: string){
    const clientToBeDeletedIndex = this.clients.findIndex(client => client.cpf === cpf);
    this.clients.splice(clientToBeDeletedIndex, 1);
    localStorage.setItem('clients', JSON.stringify(this.clients));
  }
}
