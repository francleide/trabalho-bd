import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';

import { VitrineComponent } from './home/vitrine/vitrine.component';
import { LoginComponent } from './home/login/login.component';
import { DetalhesServicoComponent } from './home/detalhes-servico/detalhes-servico.component';
import { CadastroComponent } from './home/cadastro/cadastro.component';
import { PerfilComponent } from './usuario/perfil/perfil.component';
import { MeusPedidosComponent } from './usuario/meus-pedidos/meus-pedidos.component';
import { NovoPedidoComponent } from './usuario/novo-pedido/novo-pedido.component';
import { MeusServicosComponent } from './fornecedor/meus-servicos/meus-servicos.component';
import { MinhasEntregasComponent } from './fornecedor/minhas-entregas/minhas-entregas.component';
import { NovoServicoComponent } from './fornecedor/novo-servico/novo-servico.component';
import { EditarServicoComponent } from './fornecedor/editar-servico/editar-servico.component';
import { UsuariosComponent } from './administrador/usuarios/usuarios.component';
import { CondominioComponent } from './administrador/condominio/condominio.component';
import { PainelComponent } from './painel/painel.component';

const routes : Routes = [
  { path : '', component : LoginComponent },
  { path : 'login', component : LoginComponent },
  { path : 'cadastro', component : CadastroComponent },
  { path : 'painel', component : PainelComponent, children : [
    { path : 'vitrine', component : VitrineComponent },
    { path : 'detalhes', component : DetalhesServicoComponent },
    { path : 'usuario/perfil', component : PerfilComponent },
    { path : 'usuario/meus-pedidos', component : MeusPedidosComponent },
    { path : 'usuario/novo-pedido', component : NovoPedidoComponent },
    { path : 'fornecedor/meus-servicos', component : MeusServicosComponent },
    { path : 'fornecedor/novo-servicos', component : NovoServicoComponent },
    { path : 'fornecedor/editar-servico', component : EditarServicoComponent },
    { path : 'fornecedor/minhas-entregas', component : MinhasEntregasComponent },
    { path : 'administrador/usuarios', component : UsuariosComponent },
    { path : 'administrador/condominio', component : CondominioComponent }
  ] 
  },
];

@NgModule({
  declarations: [
    LoginComponent,
    CadastroComponent,
    VitrineComponent,
    MinhasEntregasComponent,
    MeusServicosComponent,
    NovoServicoComponent,
    EditarServicoComponent,
    CondominioComponent,
    UsuariosComponent,
    MeusPedidosComponent,
    PerfilComponent,
    NovoPedidoComponent,
    DetalhesServicoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  exports : [
    RouterModule
  ]
})
export class AppRoutingModule { }
