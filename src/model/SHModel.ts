export class SHModel{
    constructor(
        private id: string,
        private estudante_id: string,
        private hobby_id:string
    ){
        this.id = id,
        this.estudante_id = estudante_id
        this.hobby_id = hobby_id
    }
    public getId():string{
       return this.id
    }
    public getEstudanteId():string{
        return this.estudante_id
    }
    public getHobbyId():string{
        return this.hobby_id
    }

}