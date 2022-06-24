import { Request, Response } from 'express';
import { TeacherDataBase } from '../data/TeacherDataBase';
import { TeacherModel } from '../model/TeacherModel';

export class TeacherController {
    async postTeacher(req: Request, res: Response): Promise<void> {
        try {
            const { nome, email, data_nasc, turma_id } = req.body
            if (!nome || !email || !data_nasc || !turma_id) {
                throw new Error('Parameters invalid')
            }
            const id = Date.now().toString()
            const reverterData_Nasc = data_nasc.split('/').reverse().join('-')
            const teacher = new TeacherModel(id, nome, email, reverterData_Nasc, turma_id)
            const teacherDB = new TeacherDataBase()

            await teacherDB.insert(teacher)
            res.status(200).send('Teacher added successfully')
        } catch (error: any) {
            res.status(400).send(error.message || error.sqlMessage)
        }
    }
    async getTeacher(req: Request, res: Response): Promise<void> {
        try {
            const teacherDB = new TeacherDataBase()
            const teacher = await teacherDB.select()

            res.status(200).send(teacher)
        } catch (error: any) {
            res.status(400).send(error.message || error.sqlMessage)
        }
    }
    async putTeacher(req: Request, res: Response): Promise<void> {
        try {
            const id = req.params.id
            const class_id = req.body.class_id
            const teacherDB = new TeacherDataBase()

            await teacherDB.updateDocente(id, class_id)
            res.status(200).send('Class updated successfully')

        } catch (error: any) {
            res.status(400).send(error.message || error.sqlMessage)
        }
    }
};