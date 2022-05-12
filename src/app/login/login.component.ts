import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from '../model/UserLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLogin: UserLogin = new UserLogin
  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {}

  logar(){
    this.auth.logar(this.userLogin).subscribe((resp: UserLogin) => {
      this.userLogin = resp;
      alert('Usuario Logado com sucesso')

      this.router.navigate(['/inicio'])
    })
  }

}
