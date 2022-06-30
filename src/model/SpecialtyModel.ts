export class SpecialtyModel{
    constructor(
        private id: string,
        private nome: string
    ){
        this.id = id,
        this.nome = nome
    }
    public getId():string{
       return this.id
    }
    public getNome():string{
        return this.nome
    }

}