import { Request, Response } from 'express';
import { DocenteDataBase } from '../data/DocenteDataBase';
import { DocenteModel } from '../model/DocenteModel';

export class DocenteController {
    async postDocente(req: Request, res: Response): Promise<void> {
        try {
            const { nome, email, data_nasc, turma_id } = req.body
            if (!nome || !email || !data_nasc || !turma_id) {
                throw new Error('Parameters invalid')
            }
            const id = Date.now().toString()
            const reverterData_Nasc = data_nasc.split('/').reverse().join('-')
            const docente = new DocenteModel(id, nome, email, reverterData_Nasc, turma_id)
            const docenteDB = new DocenteDataBase()

            await docenteDB.insert(docente)
            res.status(200).send('Teacher added successfully')
        } catch (error: any) {
            res.status(400).send(error.message || error.sqlMessage)
        }
    }

    async getDocente(req: Request, res: Response): Promise<void> {
        try {
            const docenteDB = new DocenteDataBase()
            const docente = await docenteDB.select()

            res.status(200).send(docente)
        } catch (error: any) {
            res.status(400).send(error.message || error.sqlMessage)
        }
    }
    async putDocente(req: Request, res: Response): Promise<void> {
        try {
            const id = req.params.id
            const turma_id = req.body.turma_id
            const docenteDB = new DocenteDataBase()

            await docenteDB.updateDocente(id, turma_id)
            res.status(200).send('Class updated successfully')

        } catch (error: any) {
            res.status(400).send(error.message || error.sqlMessage)
        }
    }
};