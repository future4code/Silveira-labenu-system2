import { Request, Response } from "express";
import { DocEspDataBase } from "../data/DocEspDataBase";
import { DocEspModel } from "../model/DocEspModel";


export class DocEspController{
    async postDocEsp(req:Request, res:Response):Promise<void>{
        try {
            const {docente_id, especialidade_id} = req.body
            const id = Date.now().toString()

            if(!docente_id || !especialidade_id){
                throw new Error ("O Id do docente e da especialidade precisa ser passado corretamente")
            }
            const docEsp = new DocEspModel(id, docente_id, especialidade_id)
            const docEspDB = new DocEspDataBase()

            await docEspDB.insert(docEsp)
            res.status(201).send(`Especialidade do docente foi adicionada com sucesso`)
        } catch (error:any) {
            res.status(500).send(error.message||error.sqlMessage)
        }
    }
}