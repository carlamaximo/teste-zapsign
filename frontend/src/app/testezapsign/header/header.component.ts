import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToNewUser() {
    this.router.navigate(['/criar-novo-usuario'])
  }

  goToNewCompany() {
    this.router.navigate(['/criar-nova-empresa'])
  }

  goToNewDoc() {
    this.router.navigate(['/criar-novo-documento'])
  }

}
