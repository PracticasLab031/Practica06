import { Component, OnInit } from '@angular/core';
import { Receta } from '../recetas/receta.model';
import { RecetasService } from '../recetas/recetas.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-detalle-recetas',
  templateUrl: './detalle-recetas.page.html',
})
export class DetalleRecetasPage implements OnInit {

  idReceta: number;
  receta: Receta;
  constructor(private recetaService: RecetasService,
    private router: Router, private activateRouter: ActivatedRoute ) { }

  ngOnInit() {
    this.activateRouter.paramMap.subscribe(paramMap =>{
      this.idReceta = Number.parseInt(paramMap.get('idReceta'));
      this.receta = this.recetaService.getReceta(this.idReceta);
    })
  }

}
