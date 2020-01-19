import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  msgError = 'Ocorreu algum erro. Favor Contactar o Suporte!';

  constructor() { }

  ngOnInit() {
  }

}
