import { Component, OnInit } from '@angular/core';
import { ApiService } from '../user/services/api.service';
import { ApiService as apiCompany} from '../company/services/api.service';

@Component({
  selector: 'appnew-doc',
  templateUrl: './newdoc.component.html',
  styleUrls: ['./newdoc.component.css']
})
export class NewDocComponent implements OnInit {

  created_users:string[] = [];
  created_companies:string[] = [];

  constructor(private apiUser: ApiService, private apiCompany: apiCompany) { }

  ngOnInit(): void {
    this.getCreatedUsers();
    // console.log('iniciou',this.created_users);
  }

  getCreatedUsers() {
    this.apiUser.getAllUsers().subscribe(
      data => {
        console.log(data);
        data.forEach((e:any) => {
          this.created_users.push(e.email)
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
        console.log(data);
        // data.forEach((e:any) => {
        //   // this.created_companies.push(e.email);
        // });
      },
      error => {
        console.log(error.message);
      }
    )
  }
}
