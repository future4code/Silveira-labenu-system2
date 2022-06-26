import { Request, Response } from "express";
import { SpecialtyDataBase } from "../data/SpecialtyDataBase";
import { SpecialtyModel } from "../model/SpecialtyModel";

export class SpecialtyController{
    async postSpecialty(req:Request, res:Response):Promise<void>{
        try {
            const {nome} = req.body
            const id = Date.now().toString()

            if(!nome){
                throw new Error ("the name needs to be passed")
            }
            const specialty = new SpecialtyModel(id, nome)
            const specialtyDB = new SpecialtyDataBase()

            await specialtyDB.insert(specialty)
            res.status(201).send(`${nome} has been added to specialties`)
        } catch (error:any) {
            res.status(500).send(error.message||error.sqlMessage)
        }
    }
}