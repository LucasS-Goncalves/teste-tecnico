import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { clientsRoutes } from './clients.routes';
import { FormsModule } from '@angular/forms';
import { ClientInfoComponent } from 'src/app/components/client-info/client-info.component';
import { ClientsComponent } from './clients.component';



@NgModule({
  declarations: [
    ClientsComponent,
    ClientInfoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(clientsRoutes),
    FormsModule
  ]
})
export class ClientsModule { }
