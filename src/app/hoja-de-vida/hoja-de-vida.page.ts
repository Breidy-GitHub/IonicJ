import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hoja-de-vida',
  templateUrl: './hoja-de-vida.page.html',
  styleUrls: ['./hoja-de-vida.page.scss'],
})
export class HojaDeVidaPage implements OnInit {

  constructor(private router: Router) { }
  ngOnInit() {
  }
  navigateToLogin() {
    this.router.navigate(['/login']);
  }
  navigateToMultimedia() {
    this.router.navigate(['/multimedia']);
  }
  navigateToProyectos() {
    this.router.navigate(['/proyectos']);
  }

}
