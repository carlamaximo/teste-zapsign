import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users = [
    { email: 'Carla' , id_user: '', password: '', verified: ''}
  ]
  selected_user = {
    email: null,
    created_at: null,
    email_verified: null,
    last_updated_at: null,
  };

  selected_id:any;

  constructor(private api: ApiService){
    this.getUsers();
  }

  ngOnInit(): void {
  }

  getUsers = () => {
    this.api.getAllUsers().subscribe(
      data => {
        this.users = data;
      },
      error => {
        console.log(error.message)
      }
    )
  }

  userClicked = (user:any) => {
    this.api.getUser(user.id_user).subscribe(
      data => {
        console.log(data[0]);
        this.selected_user = data[0];
        this.selected_id = data[0].id_user;
      },
      error => {
        console.log(error.message)
      }
    )
  }

  updateUser = (selected_user:any) => {
    this.api.updateUser(selected_user).subscribe(
      data => {
        console.log(data[0]);
      },
      error => {
        console.log(error.message);
      }
    )
  }

  deleteUser = (user:any) => {
    this.api.deleteUser(user.id_user).subscribe(
      data => {
        let index:number = 0;
        this.users.forEach((e, i,) => {
          if (e.id_user === user.id_user) index = i;
          });
          this.users.splice(index, 1);

      },
      error => {
        console.log(error.message);
      }
    )
  }
}
