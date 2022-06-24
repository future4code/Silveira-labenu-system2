import { TeacherModel } from "../model/TeacherModel";
import { BaseDatabase } from "./BaseDatabase";

export class TeacherDataBase extends BaseDatabase {
    async insert(teacher: TeacherModel) {
        try {
            await BaseDatabase.connection('docente')
                .insert({
                    id: teacher.getId(),
                    name: teacher.getName(),
                    email: teacher.getEmail(),
                    birth: teacher.getBirth(),
                    class_id: teacher.getClassId()
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
                const revertedDate = teacher.birth.toISOString().slice(0, 10).split("-").reverse().join("/")
                return { ...teacher, birth: revertedDate }
            })
        } catch (error: any) {
            throw new Error('Unexpected error, try again')
        }
    }
    async updateDocente(id: string, class_id: string) {
        try {
            await BaseDatabase.connection('docente')
                .update({ class_id: class_id })
                .where('id', '=', id)
        } catch (error: any) {
            throw new Error('Unexpected error, try again')
        }
    }
};