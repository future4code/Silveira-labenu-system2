export class TurmaModel{
       constructor(
      public id: string,
      public nome: string,
      public modulo: "1"|"2"|"3"|"4"|"5"|"6"
    ){
       this.id = id,
       this.nome = nome,
       this.modulo = modulo
    }
 }
 