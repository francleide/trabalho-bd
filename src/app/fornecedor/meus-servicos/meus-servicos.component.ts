import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meus-servicos',
  templateUrl: './meus-servicos.component.html',
  styleUrls: ['./meus-servicos.component.css']
})
export class MeusServicosComponent implements OnInit {
  servicos = [
    { titulo : "Eletricista", descricao : "Lorem ipsum dolor sit amet consectetur adipisicing elit.", imagem : "eletricista.jpg" },
    { titulo : "Encanador", descricao : "Lorem ipsum dolor sit amet consectetur adipisicing elit.", imagem : "eletricista.jpg" },
  ];

  constructor() { }

  ngOnInit() {
  }

}
