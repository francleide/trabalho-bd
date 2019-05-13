import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vitrine',
  templateUrl: './vitrine.component.html',
  styleUrls: ['./vitrine.component.css']
})
export class VitrineComponent implements OnInit {
  servicos = [
    { titulo : "Eletricista", descricao : "Lorem ipsum dolor sit amet consectetur adipisicing elit.", imagem : "eletricista.jpg" },
    { titulo : "Contador", descricao : "Lorem ipsum dolor sit amet consectetur adipisicing elit.", imagem : "eletricista.jpg" },
    { titulo : "Advogado", descricao : "Lorem ipsum dolor sit amet consectetur adipisicing elit.", imagem : "eletricista.jpg" },
    { titulo : "Encanador", descricao : "Lorem ipsum dolor sit amet consectetur adipisicing elit.", imagem : "eletricista.jpg" },
  ];

  constructor() { }

  ngOnInit() {
  }

}