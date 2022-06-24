import { Request, Response } from "express";
import { EstHobbyDataBase } from "../data/EstHobbyDataBase";
import { EstHobbyModel } from "../model/EstHobbyModel";

export class EstHobbyController{
    async postEstHobby(req:Request, res:Response):Promise<void>{
        try {
            const {estudante_id, hobby_id} = req.body
            const id = Date.now().toString()

            if(!estudante_id || !hobby_id){
                throw new Error ("O id do estudante e seu hobby precisam ser passados")
            }
            const estHobby = new EstHobbyModel(id, estudante_id, hobby_id)
            const estHobbyDB = new EstHobbyDataBase()

            await estHobbyDB.insert(estHobby)
            res.status(201).send(`O hobby foi adicionado ao estudante`)
        } catch (error:any) {
            res.status(500).send(error.message||error.sqlMessage)
        }
    }
}