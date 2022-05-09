import { Component, OnInit } from '@angular/core';
import { ApiService as apiUser} from '../user/services/api.service';
import { ApiService as apiCompany} from '../company/services/api.service';
import { ApiService as apiDoc} from '../doc/services/api.service';

@Component({
  selector: 'appnew-doc',
  templateUrl: './newdoc.component.html',
  styleUrls: ['./newdoc.component.css']
})
export class NewDocComponent implements OnInit {

  created_users:string[] = [];

  created_companies:string[] = [];

  id_created_companies:number[] = [];

  doc = { name: '', deleted: false, signed: false, company: '',created_by: '' };

  constructor(private apiUser: apiUser, private apiCompany: apiCompany, private apiDoc: apiDoc) { }

  ngOnInit(): void {
    this.getCreatedUsers();
    this.getCreatedCompanies();
  }

  getCreatedUsers() {
    this.apiUser.getAllUsers().subscribe(
      data => {
        data.forEach((e:any) => {
          this.created_users.push(e.email);
        });
      },
      error => {
        console.log(error.message);
      }
    )
  }

  getCreatedCompanies() {
    this.apiCompany.getAllCompanies().subscribe(
      data => {
        data.forEach((e:any) => {
          this.created_companies.push(e.name);
          this.id_created_companies.push(e.id_company);
        });
      },
      error => {
        console.log(error.message);
      }
    )
  }

  saveNewDoc() {
    this.apiDoc.createDoc(this.doc).subscribe(
      data => {
        alert('Empresa criada com sucesso!');
      },
      error => {
        alert('Desculpe! Não foi possível criar um novo documento. Essa funcionalidade ainda está sendo implementada.');
        console.log(error.message);
      }
    )
  }
}
