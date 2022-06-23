import { TurmaModel } from "../model/TurmaModel";
import { BaseDatabase } from "./BaseDatabase";

export class TurmaDataBase extends BaseDatabase{
    public async insert(turma:TurmaModel){
        try{
        await BaseDatabase.connection("turma")
        .insert({
            id: turma.id,
            nome: turma.nome,
            modulo: turma.modulo
        })
       } catch(error){
            throw new Error("Erro inesperado, tente novamente")
       }
    }
    public async select(){
        try {
            const result = await BaseDatabase.connection("turma")
            .select("*")
            return result
        } catch (error) {
            throw new Error("Erro Inesperado")
        }
    }
}

