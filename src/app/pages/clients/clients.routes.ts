import { ClientInfoComponent } from './../../components/client-info/client-info.component';
import { Routes } from "@angular/router";
import { ClientsComponent } from "./clients.component";

export const clientsRoutes: Routes = [
  {
    path: '',
    component: ClientsComponent,
    pathMatch: 'full'
  },
  {
    path: ':cpf',
    component: ClientInfoComponent,
    pathMatch: 'full'
  }
]
