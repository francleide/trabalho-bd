import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-condominio',
  templateUrl: './condominio.component.html',
  styleUrls: ['./condominio.component.css']
})
export class CondominioComponent implements OnInit {
  condominio = {
    nome : 'Village Banco de Dados',
    endereco : 'Av. Cap.Mor Gouveia, 3000 - Lagoa Nova, Natal - RN, 59078-970',
    codigo : 'ABC123XYZ'
  };

  constructor() { }

  ngOnInit() {
  }

}
