import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-capicua',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './capicua.component.html',
  styleUrl: './capicua.component.css'
})
export class CapicuaComponent {
  @Input() numero='';
  inv_numero ='';
  text_valida='';
  valida_numero =0;
  
  invertir(): void {
    
    this.inv_numero='';
      for (let i = this.numero.length - 1; i >= 0; i--) {
        this.inv_numero += this.numero[i];
     }
  }
  validar(): void{
    const validanumero =parseInt(this.numero);
    if (isNaN(validanumero)){
      this.text_valida ='Debe ingresar solo numeros enteros' 
    }else if(this.numero.length < 2) {
      this.text_valida ='Ingrese un numero mayor a dos digitos para hacer la validacion'
    }else if ((this.numero === this.inv_numero) && (this.numero != '') && (this.numero.length >= 2) ){
    
      this.text_valida ='Su numero es CAPICUA'
      
    }


    else {
      this.text_valida ='Su numero NO es CAPICUA'
    }
    
    
  }
  
  capicua(): void {
    this.invertir();
    this.validar();
    
  }

}
