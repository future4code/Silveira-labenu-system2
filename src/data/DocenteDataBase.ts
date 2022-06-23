import { DocenteModel } from "../model/DocenteModel";
import { BaseDatabase } from "./BaseDatabase";

export class DocenteDataBase extends BaseDatabase {
    public async insert(docente: DocenteModel) {
        try {
            await BaseDatabase.connection('docente')
                .insert({
                    id: docente.id,
                    nome: docente.nome,
                    email: docente.email,
                    data_nasc: docente.data_nasc,
                    turma_id: docente.turma_id
                })
        } catch (error: any) {
            throw new Error('Unexpected error, try again')
        }
    }
    public async select() {
        try {
            const result = await BaseDatabase.connection('docente')
                .select('*')
            return result
        } catch (error: any) {
            throw new Error('Unexpected error, try again')
        }
    }
};