import { DocenteModel } from "../model/DocenteModel";
import { BaseDatabase } from "./BaseDatabase";

export class DocenteDataBase extends BaseDatabase {
    async insert(docente: DocenteModel) {
        try {
            await BaseDatabase.connection('docente')
                .insert({
                    id: docente.getId(),
                    nome: docente.getNome(),
                    email: docente.getEmail(),
                    data_nasc: docente.getDataNasc(),
                    turma_id: docente.getTurmaId()
                })
        } catch (error: any) {
            throw new Error('Unexpected error, try again')
        }
    }
    async select() {
        try {
            const result = await BaseDatabase.connection('docente')
                .select('*')
                console.log(result)
            return result.map((docente) => {
                const reverterData = docente.data_nasc.toISOString().slice(0, 10).split("-").reverse().join("/")
                return { ...docente, data_nasc: reverterData }
            })
        } catch (error: any) {
            throw new Error('Unexpected error, try again')
        }
    }
    async updateDocente(id: string, turma_id: string) {
        try {
            await BaseDatabase.connection('docente')
                .update({ turma_id: turma_id })
                .where('id', '=', id)
        } catch (error: any) {
            throw new Error('Unexpected error, try again')
        }
    }
};