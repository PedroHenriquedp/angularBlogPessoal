import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = new User
  confirmarSenha: string
  tipoUsuario: string

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit():void {
    window.scroll(0,0)
  }

  confirmSenha(event: any) {
    this.confirmarSenha = event.target.value
  }


  tipoUser(event: any) {
    this.tipoUsuario = event.target.value
    console.log(this.tipoUsuario)
  }

  cadastrar() {
    this.user.tipo = this.tipoUsuario

    if(this.user.senha == this.confirmarSenha){
      this.auth.cadastrar(this.user).subscribe((resp: User) =>{
        console.log(this.user)
        this.user = resp
        alert('Usuário Cadastrado com sucesso!!!')
        this.router.navigate(['/entrar'])
      })
      alert('As senhas não são iguais!!')
    } else{
      alert('As senhas não coincidem')
    }
  }

}
