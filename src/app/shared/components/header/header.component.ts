import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isOpen: boolean = false

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  toggleMenu(){
    this.isOpen = !this.isOpen;
  }

  salir(){
    console.log('saliendo...')
    this.router.navigate(['auth/login']);

  }

}
