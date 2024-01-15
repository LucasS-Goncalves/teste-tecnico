import { Component, OnInit } from '@angular/core';
import { ClientService } from './_services/client.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private clientService: ClientService){}

  ngOnInit(): void {
    this.clientService.init();
  }
}
