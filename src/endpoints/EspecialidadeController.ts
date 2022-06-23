import { Request, Response } from "express";
import { EspecialidadeDataBase } from "../data/EspecialidadeDataBase";
import { EspecialidadeModel } from "../model/EspecialidadeModel";

export class EspecialidadeController{
    async postEspecialidade(req:Request, res:Response):Promise<void>{
        try {
            const {nome} = req.body
            const id = Date.now().toString()

            if(!nome){
                throw new Error ("O nome precisa ser passado")
            }
            const especialidade = new EspecialidadeModel(id, nome)
            const especialidadeDB = new EspecialidadeDataBase()

            await especialidadeDB.insert(especialidade)
            res.status(201).send(`${nome} foi adicionado a especialidades`)
        } catch (error:any) {
            res.status(500).send(error.message||error.sqlMessage)
        }
    }
}