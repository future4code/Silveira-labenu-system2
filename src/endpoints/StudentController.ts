import { Request, Response } from "express";
import { StudentDataBase } from "../data/StudentDataBase";
import { StudentModel } from "../model/StudentModel";

export class StudentController {
    async postStudent(req: Request, res: Response): Promise<void> {
        try {
            const { nome, email, turma_id, data_nasc } = req.body
            const revertedDate = data_nasc.split('/').reverse().join('-')
            const id = Date.now().toString()

            if (!nome || nome === "") {
                throw new Error("The name input is empty")
            }
            if (!email || email === "") {
                throw new Error("The email input is empty")
            }
            if (!data_nasc) {
                throw new Error("The birth input is empty")
            }
            if (!turma_id || turma_id === "") {
                throw new Error("The turma id input is empty")
            }

            const student = new StudentModel(id, nome, email, revertedDate, turma_id)
            const studentDB = new StudentDataBase()

            await studentDB.insert(student)
            res.status(201).send("Student successfully added")
        } catch (error: any) {
            res.status(500).send(error.message || error.sqlMessage)
        }
    }

    async getStudent(req: Request, res: Response): Promise<void> {
        try {
            const nome = req.params.nome
            const studentDB = new StudentDataBase()

            const student = await studentDB.select(nome)

            res.status(200).send(student)
        } catch (error: any) {
            res.status(500).send(error.message || error.sqlMessage)
        }
    }

    async putStudent(req: Request, res: Response): Promise<void> {
        try {
            const id = req.params.id
            const class_id = req.body.turma_id
            const studentDB = new StudentDataBase()

            if (!class_id || class_id === "") {
                throw new Error("The name input is empty")
            }
            if (!id || id === "") {
                throw new Error("The id input is empty")
            }

            await studentDB.update(id, class_id)
            res.status(200).send("the student's class has been successfully changed")

        } catch (error: any) {
            res.status(500).send(error.message || error.sqlMessage)
        }
    }
} 