import { Request, Response } from "express";
import { HobbyDataBase } from "../data/HobbyDataBase";
import { HobbyModel } from "../model/HobbyModel";

export class HobbyController{
    async postHobby(req:Request, res:Response):Promise<void>{
        try {
            const {nome} = req.body
            const id = Date.now().toString()

            if(!nome){
                throw new Error ("O nome precisa ser passado")
            }
            const hobby = new HobbyModel(id, nome)
            const hobbyDB = new HobbyDataBase()

            await hobbyDB.insert(hobby)
            res.status(201).send(`${nome} foi adicionado a hobbies`)
        } catch (error:any) {
            res.status(500).send(error.message||error.sqlMessage)
        }
    }
}