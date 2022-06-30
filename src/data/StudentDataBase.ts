import { StudentModel } from "../model/StudentModel";
import { BaseDatabase } from "./BaseDatabase";

export class StudentDataBase extends BaseDatabase {
    public async insert(student: StudentModel) {
        try {
            await BaseDatabase.connection("estudante")
                .insert({
                    id: student.getId(),
                    nome: student.getNome(),
                    email: student.getEmail(),
                    data_nasc: student.getData_nasc(),
                    turma_id: student.getTurma_id()
                })
        } catch (error) {
            throw new Error("Unexpected error, try again")
        }
    }
    public async select(nome: string) {
        try {
            const result = await BaseDatabase.connection("estudante")
                .select("*")
                .where("nome", "=", nome)
            return result.map((student) => {
                const revertedData = student.data_nasc.toISOString().slice(0, 10).split("-").reverse().join("/")
                return { ...student, data_nasc: revertedData }
            })
        } catch (error) {
            throw new Error("Unexpected error, try again")
        }
    }
    public async update(id: string, turma_id: string) {
        try {
            await BaseDatabase.connection("estudante")
                .update({ turma_id: turma_id })
                .where("id", "=", id)
        } catch (error: any) {
            throw new Error("Erro Unexpected error, try again");
        }
    }
}