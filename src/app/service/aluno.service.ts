import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  constructor() { }

  media(nota1:number, nota2:number){
    return (nota1 + nota2)/2
  }
}
