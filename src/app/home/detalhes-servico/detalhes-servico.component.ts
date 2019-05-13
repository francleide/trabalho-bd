import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalhes-servico',
  templateUrl: './detalhes-servico.component.html',
  styleUrls: ['./detalhes-servico.component.css']
})
export class DetalhesServicoComponent implements OnInit {
  servico = {
    titulo : 'Eletricista',
    descricao : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, quo consectetur sint vitae ipsum.',
    horarios :'Segunda a Sábado das 8h às 20h',
    responsavel : 'João da Silva',
    telefone : '(84) 99999-9999',
    localizacao : 'Bloco 1. Apto 410.',
    imagem : 'eletricista.jpg'
  };

  constructor() { }

  ngOnInit() {
  }

}
