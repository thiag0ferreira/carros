import { Component, OnInit } from '@angular/core';
import {Carros} from "../formulario/carro";
import {CarroService} from "../../carro.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-lista-carrros',
  templateUrl: './lista-carrros.component.html',
  styleUrls: ['./lista-carrros.component.css']
})
export class ListaCarrrosComponent implements OnInit {

  mostrar:boolean = false;
  listaCarros: Carros[]=[];
  carros: Carros={
    id:0,
    nome:'',
    tipo:'',
    descricao:''
  }



  constructor( private service: CarroService,
               private router: Router,
               private route: ActivatedRoute,

  ) { }

  ngOnInit(): void {
  }

  findAllCarros(){
    console.log("EEEEEEEEEEEEEEEEEEEEEEEEEEEEEE")
    this.mostrar = !this.mostrar;
    if (this.mostrar === true){
      this.service.;
    }
  }

}
