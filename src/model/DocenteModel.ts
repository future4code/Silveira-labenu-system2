export class DocenteModel {
   constructor(
      public id: string,
      public nome: string,
      public email: string,
      public data_nasc: Date,
      public turma_id: string
   ) {
         this.id = id,
         this.nome = nome,
         this.email = email,
         this.data_nasc = data_nasc,
         this.turma_id = turma_id
   }
};