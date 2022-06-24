import { EstudanteModel } from "../model/EstudanteModel";
import { BaseDatabase } from "./BaseDatabase";

export class EstudanteDataBase extends BaseDatabase{
    public async insert(estudante:EstudanteModel){
        try{
        await BaseDatabase.connection("estudante")
        .insert({
            id: estudante.getId(),
            nome: estudante.getNome(),
            email: estudante.getEmail(),
            data_nasc: estudante.getDataNasc(),
            turma_id: estudante.getTurmaId()
        })
       } catch(error){
            throw new Error("Erro inesperado, tente novamente")
       }
    }
    public async select(){
        try {
            const result = await BaseDatabase.connection("estudante")
            .select("*")
            return result
        } catch (error) {
            throw new Error("Erro Inesperado")
        }
    }
    public async update(id: string, turma_id: string){
        try{
            await BaseDatabase.connection("estudante")
            .update({turma_id: turma_id})
            .where("id" , "=", id)
        } catch(error: any) {
            throw new Error("Erro Inesperado");
        }
    }
}