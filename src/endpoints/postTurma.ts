import { Request, Response } from "express";
import insertTurma from "../data/Turma";
import { Turma } from "../model/Turma";

export default async function postTurma(req:Request, res:Response):Promise<void>{
    try {
        const turma: Turma={
            id: Date.now().toString(),
            nome: req.body.nome,
            modulo: req.body.modulo
        }
        if(!turma){
            throw new Error ("Turma inválida")
        }
        await insertTurma(turma)
        res.status(201).send("Turma criada com sucesso")
    } catch (error:any) {
        res.status(400).send(error.message || error.sqlMessage)
    }    
}