import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nome = ''

  constructor(private route: ActivatedRoute ) { }

  ngOnInit() {
    this.nome  = this.route.snapshot.params['nome'];
  }

}
