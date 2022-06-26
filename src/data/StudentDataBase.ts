import { StudentModel } from "../model/StudentModel";
import { BaseDatabase } from "./BaseDatabase";

export class StudentDataBase extends BaseDatabase {
    public async insert(student: StudentModel) {
        try {
            await BaseDatabase.connection("estudante")
                .insert({
                    id: student.getId(),
                    nome: student.getName(),
                    email: student.getEmail(),
                    birth: student.getBirth(),
                    class: student.getClassId()
                })
        } catch (error) {
            throw new Error("Unexpected error, try again")
        }
    }
    public async select(name: string) {
        try {
            const result = await BaseDatabase.connection("estudante")
                .select("*")
                .where("nome", "=", name)
            return result.map((student) => {
                const revertedData = student.data_nasc.toISOString().slice(0, 10).split("-").reverse().join("/")
                return { ...student, data_nasc: revertedData }
            })
        } catch (error) {
            throw new Error("Unexpected error, try again")
        }
    }
    public async update(id: string, class_id: string) {
        try {
            await BaseDatabase.connection("estudante")
                .update({ class_id: class_id })
                .where("id", "=", id)
        } catch (error: any) {
            throw new Error("Erro Unexpected error, try again");
        }
    }
}