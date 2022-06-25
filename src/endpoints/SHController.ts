import { Request, Response } from "express";
import { SHDataBase } from "../data/SHDataBase";
import { SHModel } from "../model/SHModel";

export class SHController{
    async postSH(req:Request, res:Response):Promise<void>{
        try {
            const {estudante_id, hobby_id} = req.body
            const id = Date.now().toString()

            if(!estudante_id || !hobby_id){
                throw new Error ("Student ID and hobby need to be passed")
            }
            const studentHobby = new SHModel(id, estudante_id, hobby_id)
            const studentHobbyDB = new SHDataBase()

            await studentHobbyDB.insert(studentHobby)
            res.status(201).send(`The hobby has been added to the student`)
        } catch (error:any) {
            res.status(500).send(error.message||error.sqlMessage)
        }
    }
}