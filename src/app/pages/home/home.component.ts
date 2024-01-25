import { Component, Input, OnInit } from '@angular/core';
import { AlunoService } from '../../service/aluno.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  constructor(private service: AlunoService) { }

  @Input()
  nome: string = "";
  @Input()
  nota1: string = "";
  @Input()
  nota2: string = "";
  resultado: string = ""

  alunos: Array<Aluno> = []

  ngOnInit(): void {
    console.log(this.nome, this.nota1, this.nota2)
    console.log(this.alunos)
  }

  onSubmit() {
    if (!isNaN(parseFloat(this.nota1)) && !isNaN(parseFloat(this.nota2))) {
      const media = this.service.media(parseFloat(this.nota1), parseFloat(this.nota2));
      if(media < 7) {
        this.resultado = "Reprovado"
      }else {
        this.resultado = "Aprovado"
      }
      const aluno = { nome: this.nome, media: media, resultado: this.resultado }
      this.alunos.push(aluno);
    }
  }

}

interface Aluno {
  nome: string;
  media: number;
  resultado: string;
  editando?:boolean;
}
