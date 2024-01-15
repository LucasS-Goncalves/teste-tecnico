import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IClient } from 'src/app/_interfaces/IClient';
import { ClientService } from 'src/app/_services/client.service';

@Component({
  selector: 'app-client-info',
  templateUrl: './client-info.component.html',
  styleUrls: ['./client-info.component.css']
})
export class ClientInfoComponent implements OnInit, OnDestroy{

  client: IClient | undefined;
  paramsSubscription: Subscription | undefined;

  constructor(private clientService: ClientService, private route: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    this.getClient();
  }

  getClient(){
    this.paramsSubscription = this.route.paramMap.subscribe({
      next: params => {
        const clientCpf = params.get('cpf');
        this.client = this.clientService.clients.find(client => client.cpf === clientCpf);

        if(!this.client) this.router.navigate(['']);
      }
    })
  }

  ngOnDestroy(): void {
    this.paramsSubscription?.unsubscribe();
  }
}
