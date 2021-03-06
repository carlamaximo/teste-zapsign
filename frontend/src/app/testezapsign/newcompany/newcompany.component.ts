import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../user/services/api.service';
import { ApiService as ApiCompany } from '../company/services/api.service'

@Component({
  selector: 'appnewcompany',
  templateUrl: './newcompany.component.html',
  styleUrls: ['./newcompany.component.css']
})
export class NewCompanyComponent implements OnInit {

  created_users:string[] = [];

  created_companies:string[] = [];

  invited_users:string[] = [];
  
  company = { name: '', locale: '', lang: '', created_by: '', users: '' };

  constructor(private apiUser: ApiService, private apiCompany: ApiCompany) { }

  ngOnInit(): void {
    this.getCreatedUsers();
  }

  getCreatedUsers() {
    this.apiUser.getAllUsers().subscribe(
      data => {
        data.forEach((e:any) => {
          this.created_users.push(e.email);
          this.invited_users.push(e.email);
        });
      },
      error => {
        console.log(error.message);
      }
    )
  }

  saveNewCompany() {
    this.apiCompany.createCompany(this.company).subscribe(
      data => {
        alert('Empresa criada com sucesso!');
      },
      error => {
        alert('Desculpe! Não foi possível criar uma nova empresa. Essa funcionalidade ainda está sendo implementada.');
        console.log(error.message);
      }
    )
  }
}
