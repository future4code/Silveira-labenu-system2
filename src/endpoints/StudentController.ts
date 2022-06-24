import { Request, Response } from "express";
import { EstudanteDataBase } from "../data/EstudanteDataBase";
import { EstudanteModel } from "../model/EstudanteModel";

export class StudentController {
    async postStudent(req: Request, res: Response): Promise<void>{
        try {
           
            const Date = req.body.data_nasc
            const birth: Date = Date.split('/').reverse().join('-');
            const {nome, email, turma_id} = req.body
            const id = Date.now().toString()
            
            if(!nome || nome === ""){
                throw new Error("The name input is empty")
            }
            if(!email || email === ""){
                throw new Error("The name input is empty")
            }
            if(!birth){
                throw new Error("The name input is empty")
            }
            if(!turma_id || turma_id === ""){
                throw new Error("The name input is empty")
            }

            const estudante = new EstudanteModel(id, nome, email, birth, turma_id)
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

    async putStudent(req: Request, res: Response): Promise<void>{
        try{
            const id = req.params.id
            const turma_id = req.body.turma_id
            const estudanteDB = new EstudanteDataBase()

            if(!turma_id || turma_id === ""){
                throw new Error("The name input is empty")
            }

            await estudanteDB.update(id, turma_id)
            res.status(200).send("modificou")

        }catch(error: any){
            res.status(500).send(error.message || error.sqlMessage)
        }
    }
} 