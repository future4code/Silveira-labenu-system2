import { Request, Response } from "express";
import { EstudanteDataBase } from "../data/EstudanteDataBase";
import { EstudanteModel } from "../model/EstudanteModel";

export class StudentController {
    async postStudent(req: Request, res: Response): Promise<void>{
        try {
            const {nome, email, data_nasc, turma_id} = req.body
            const id = Date.now().toString()
            
            

            const estudante = new EstudanteModel(id, nome, email, data_nasc, turma_id)
            const estudanteDB = new EstudanteDataBase()
    
            await estudanteDB.insert(estudante)
            res.status(201).send("Estudante adicionada com sucesso")
    
        } catch (error:any) {
            res.status(500).send(error.message || error.sqlMessage)
        }
    }

    async getStudent(req: Request, res: Response):Promise<void>{
        try {
            const estudanteDB = new EstudanteDataBase()
    
            const estudante = await estudanteDB.select()
    
            res.status(200).send(estudante)
        } catch (error:any) {
            res.status(500).send(error.message || error.sqlMessage)
        }
    }
}