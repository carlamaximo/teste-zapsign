import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../user/services/api.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  user = { email: '', password: '', verified: false };

  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }

  saveNewUser() {
    this.api.createUser(this.user).subscribe(
      data => {
        alert('Usuário criado com sucesso!');
      },
      error => {
        console.log(error.message);
        alert('Ops! Não foi possível criar o usuário. Por favor, verifique seu email.')
      }
    )
  }
}
