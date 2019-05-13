import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuariosPendentes = [
    { nome : 'João da Silva', unidade : 'Bloco 1. Apto 101.', email : 'joao@dasilva.com' },
    { nome : 'Maria Pereira', unidade : 'Bloco 2. Apto 202.', email : 'maria@pereira.com' },
    { nome : 'Carlos Cardoso', unidade : 'Bloco 3. Apto 303.', email : 'carlos@cardoso.com' }
  ];

  usuariosAtivos = [
    { nome : 'João da Silva', unidade : 'Bloco 1. Apto 101.', email : 'joao@dasilva.com' },
    { nome : 'Maria Pereira', unidade : 'Bloco 2. Apto 202.', email : 'maria@pereira.com' },
    { nome : 'Carlos Cardoso', unidade : 'Bloco 3. Apto 303.', email : 'carlos@cardoso.com' }
  ];
  
  usuariosBloqueados = [
    { nome : 'João da Silva', unidade : 'Bloco 1. Apto 101.', email : 'joao@dasilva.com' },
    { nome : 'Maria Pereira', unidade : 'Bloco 2. Apto 202.', email : 'maria@pereira.com' },
    { nome : 'Carlos Cardoso', unidade : 'Bloco 3. Apto 303.', email : 'carlos@cardoso.com' }
  ];
  constructor() { }

  ngOnInit() {
  }

}
