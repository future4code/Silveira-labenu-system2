import { EstudanteModel } from "../model/EstudanteModel";
import { BaseDatabase } from "./BaseDatabase";

export class EstudanteDataBase extends BaseDatabase{
    public async insert(estudante:EstudanteModel){
        try{
        await BaseDatabase.connection("estudante")
        .insert({
            id: estudante.id,
            nome: estudante.nome,
            email: estudante.email,
            data_nasc: estudante.data_nasc,
            turma_id: estudante.turma_id
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
}