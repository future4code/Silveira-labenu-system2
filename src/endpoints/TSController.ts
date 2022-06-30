import { Request, Response } from "express";
import { TSDataBase } from "../data/TSDataBase";
import { TSModel } from "../model/TSModel";



export class TSController{
    async postTS(req:Request, res:Response):Promise<void>{
        try {
            const {docente_id, especialidade_id} = req.body
            const id = Date.now().toString()

            if(!docente_id || !especialidade_id){
                throw new Error ("Teacher and specialty ID must be passed correctly")
            }
            const teacherSpecialty = new TSModel(id, docente_id, especialidade_id)
            const teacherSpecialtyDB = new TSDataBase()

            await teacherSpecialtyDB.insert(teacherSpecialty)
            res.status(201).send(`Teacher Specialty has been added successfully`)
        } catch (error:any) {
            res.status(500).send(error.message||error.sqlMessage)
        }
    }
}