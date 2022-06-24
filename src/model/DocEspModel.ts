export class DocEspModel{
    constructor(
        private id: string,
        private docente_id: string,
        private especialidade_id:string
    ){
        this.id = id,
        this.docente_id = docente_id
        this.especialidade_id = especialidade_id
    }
    public getId():string{
       return this.id
    }
    public getDocenteId():string{
        return this.docente_id
    }
    public getEspecialidadeId(){
        return this.especialidade_id
    }

}