import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { CepApiService } from 'src/app/_services/cep-api.service';
import { ClientService } from 'src/app/_services/client.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  registerClientForm!: FormGroup;

  showSucessToast = false;
  showErrorToast = false;
  storeTimeout: any;

  constructor(private cepApiService: CepApiService, private clientService: ClientService){}

  ngOnInit(): void {
    this.initializeForm();
    this.getCepInfo();
  }

  initializeForm(){
    this.registerClientForm = new FormGroup({
      dadosPessoais: new FormGroup({
        nome: new FormControl('Jorge Pereira da Silva', [Validators.required, Validators.minLength(8)]),
        cpf: new FormControl('123.456.789-10' , [Validators.required, Validators.pattern(/^([0-9]{3}\.?[0-9]{3}\.?[0-9]{3}-?[0-9]{2})$/)]),
        telefone: new FormControl('(83) 3232-4040', [Validators.required, Validators.pattern(/^(\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4})\s?$/)]),
        celular: new FormControl('(83) 9495-8180', [Validators.required, Validators.pattern(/^(\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4})\s?$/)])
      }),
      endereco: new FormGroup({
        cep: new FormControl('01001-000', [Validators.required, Validators.pattern(/^[0-9]{5}-[0-9]{3}$|^[0-9]{8}$/)]),
        logradouro: new FormControl('', Validators.required),
        numero: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]+$/)]),
        complemento: new FormControl(''),
        referencia: new FormControl(''),
        bairro: new FormControl('', Validators.required),
        cidade: new FormControl('', Validators.required),
        estado: new FormControl('', Validators.required)
      })
    });
  }

  getCepInfo(){
    const cep = this.registerClientForm.get('endereco.cep')?.value;

    if(cep.length < 8) return;

    this.cepApiService.getCepInfo(cep).subscribe({
      next: (res) => {
        this.registerClientForm.get('endereco.logradouro')?.patchValue(res.logradouro);
        this.registerClientForm.get('endereco.bairro')?.patchValue(res.bairro);
        this.registerClientForm.get('endereco.cidade')?.patchValue(res.localidade);
        this.registerClientForm.get('endereco.estado')?.patchValue(res.uf);
        if(res.complemento) this.registerClientForm.get('endereco.complemento')?.patchValue(res.complemento);
      }
    })
  }

  reset(){
    this.registerClientForm.reset();
    this.registerClientForm.get('endereco.estado')?.reset('');
    this.registerClientForm.get('endereco.complemento')?.reset('');
    this.registerClientForm.get('endereco.referencia')?.reset('');

  }

  onSubmit(){
    const dadosPessoais = this.registerClientForm.get('dadosPessoais')?.value;
    const endereco = this.registerClientForm.get('endereco')?.value;
    const clientToBeAdded = {...dadosPessoais, ...endereco};

    if(this.clientService.clientExists(clientToBeAdded)) {
      this.errorToast();
      return;
    }

    this.clientService.addClients(clientToBeAdded);
    this.successToast();
    this.reset();
  }

  successToast(){
    this.closeErrorToast();
    this.showSucessToast = true;
    this.storeTimeout = setTimeout(() => {
      this.showSucessToast = false;
    }, 3000)
  }

  errorToast(){
    this.showErrorToast = true;
  }

  closeSuccessToast(){
    this.showSucessToast = false;
    clearTimeout(this.storeTimeout);
  }

  closeErrorToast(){
    this.showErrorToast = false;
  }
}
