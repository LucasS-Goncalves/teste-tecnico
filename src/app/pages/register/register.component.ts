import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { CepApiService } from 'src/app/_services/cep-api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  registerClientForm!: FormGroup;

  constructor(private cepApiService: CepApiService){}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(){

    this.registerClientForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.pattern('^((?!\s{3})\S+)+$'), Validators.minLength(8)]),
      cpf: new FormControl('' , [Validators.required, Validators.pattern(/^([0-9]{3}\.?[0-9]{3}\.?[0-9]{3}-?[0-9]{2})$/)]),
      telefoneFixo: new FormControl('', [Validators.required, Validators.pattern('^([2-8]{2})([0-9]{3,5})([0-9]{4})$')]),
      celular: new FormControl('', [Validators.required, Validators.pattern('^((1[0-9]{2})|9[0-9]{2})[0-9]{4,5}$')])
    });

  }

  getCepInfo(cep: string){
    this.cepApiService.getCepInfo(cep).subscribe({
      next: (res) => console.log(res)
    })
  }

  onSubmit(){
    console.log(this.registerClientForm.get('cpf')?.errors);
  }
}
