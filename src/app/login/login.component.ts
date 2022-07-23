import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';

import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulario : FormGroup;

  constructor(private formBuilder: FormBuilder, private service: LoginService) { 
    
    this.formulario = this.formBuilder.group({
      email: [null, Validators.compose([Validators.required, Validators.email])],
      senha: [null, Validators.compose([Validators.required, this.validatorSenha])]
    })
  }

  validatorSenha(control: FormControl) {

    const senha = control.value;
    if (senha && senha !== ''){
      const validasenha = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/;
      return validasenha.test(senha) ? null : { SenhaInvalida : true}
    }
    return null;
  }

  onSubmit() {
    console.log(this.formulario)
    if (this.formulario.valid) {
      this.service.create(this.formulario.value).subscribe(
        success => console.log('sucesso'),
        error => console.error(error),
        () => console.log('request completo')
      );
    }
  }

  ngOnInit(): void {

  }

}
