import { TeacherModel } from "../model/TeacherModel";
import { BaseDatabase } from "./BaseDatabase";

export class TeacherDataBase extends BaseDatabase {
    async insert(teacher: TeacherModel) {
        try {
            await BaseDatabase.connection('docente')
                .insert({
                    id: teacher.getId(),
                    nome: teacher.getNome(),
                    email: teacher.getEmail(),
                    data_nasc: teacher.getData_nasc(),
                    turma_id: teacher.getTurma_id()
                })
        } catch (error: any) {
            throw new Error('Unexpected error, try again')
        }
    }
    async select() {
        try {
            const result = await BaseDatabase.connection('docente')
                .select('*')
            return result.map((teacher) => {
                const revertedDate = teacher.data_nasc.toISOString().slice(0, 10).split("-").reverse().join("/")
                return { ...teacher, data_nasc: revertedDate }
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