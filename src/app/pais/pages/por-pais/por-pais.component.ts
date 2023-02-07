import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {
  termino: string=""
  hayError: boolean = true

  constructor( private PaisService: PaisService){

  }


  buscar(){
    this.hayError= false
    console.log(this.termino)
    this.PaisService.buscarPais(this.termino).subscribe(
      (resp) => {
        console.log(resp)
      } , (err) =>{
        this.hayError=true
        console.log(err)
      }    )
  }
}
