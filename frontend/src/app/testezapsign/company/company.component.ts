import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  companies = [{
    name: 'generate',
    id_company: '',
    created_at: '',
    last_update_at: '',
    locale: '',
    users: [] 
  }];

  selected_company = {
    name: '',
    id_company: '',
    created_at: '',
    last_update_at: '',
    locale: '',
    users: [] 
  };

  selected_id:any;

  constructor(private api: ApiService){
    this.getCompanies()
  }

  ngOnInit(): void {
  }

  getCompanies = () => {
    this.api.getAllCompanies().subscribe(
      data => {
        this.companies = data;
      },
      error => {
        console.log(error.message);
      }
    )
  }

  companyClicked = (company:any) => {
    this.api.getCompany(company.id_company).subscribe(
      data => {
        console.log(data[0]);
        this.selected_company = data[0];
        this.selected_id = data[0].id_company;
      },
      error => {
        console.log(error.message);
      }
    )
  }

  // updateUser = (selected_user:any) => {
  //   this.api.updateUser(selected_user).subscribe(
  //     data => {
  //       console.log(data[0]);
  //     },
  //     error => {
  //       console.log(error.message);
  //     }
  //   )
  // }

  deleteCompany = (company:any) => {
    console.log(company);
    this.api.deleteCompany(company.id_company).subscribe(
      data => {
        let index:number = 0;
        this.companies.forEach((e, i,) => {
          if (e.id_company === company.id_company) index = i;
          });
          this.companies.splice(index, 1);

      },
      error => {
        console.log(error.message);
      }
    )
  }

}
