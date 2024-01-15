import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICepApi } from '../_interfaces/ICepApi';

@Injectable({
  providedIn: 'root'
})
export class CepApiService {

  constructor(private http: HttpClient) { }

  getCepInfo(cep: string){
    return this.http.get<ICepApi>(`https://viacep.com.br/ws/${cep}/json/`);
  }
}
