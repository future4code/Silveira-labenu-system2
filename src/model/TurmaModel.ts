export class ClassRomModel{
      constructor(
      private id: string,
      private nome: string,
      private modulo: number
    ){
       this.id = id,
       this.nome = nome,
       this.modulo = modulo
    }
   public getId():string{
      return this.id
    }
   public getNome():string{
      return this.nome
   }
   public getModulo():number{
      return this.modulo
   } 
 }

