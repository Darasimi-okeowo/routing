import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrl: './error-page.component.css'
})
export class ErrorPageComponent implements OnInit{
  errorMessage: string

  constructor(){}

  ngOnInit() {
    
  }

}
