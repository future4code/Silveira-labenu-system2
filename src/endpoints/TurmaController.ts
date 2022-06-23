import { Request, Response } from "express";
import { TurmaModel } from "../model/TurmaModel";
import { TurmaDataBase } from "../data/TurmaDataBase";

export class TurmaController{
    async postTurma(req:Request, res:Response):Promise<void>{
        try {
            const {nome, modulo} = req.body
            const id = Date.now().toString()

            if( !nome || !modulo ){
                throw new Error ("O nome e o modulo precisam ser passados")
                
            }
    
            const turma = new TurmaModel(id, nome, modulo)
            const turmaDB = new TurmaDataBase()
    
            await turmaDB.insert(turma)
            res.status(201).send("Turma adicionada com sucesso")
    
        } catch (error:any) {
            res.status(500).send(error.message || error.sqlMessage)
        }
    }
    async getTurma(req:Request, res:Response):Promise<void> {
        try {
            const turmaDB = new TurmaDataBase()
    
            const turma = await turmaDB.select()
    
            res.status(200).send(turma)
        } catch (error:any) {
            res.status(500).send(error.message || error.sqlMessage)
        }
    }
}

