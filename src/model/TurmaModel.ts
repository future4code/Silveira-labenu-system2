export class TurmaModel{
      constructor(
      public id: string,
      public nome: string,
      public modulo: string 
    ){
       this.id = id,
       this.nome = nome,
       this.modulo = modulo
    }
 }
//  "1"|"2"|"3"|"4"|"5"|"6"? "ativo":"inativo" 