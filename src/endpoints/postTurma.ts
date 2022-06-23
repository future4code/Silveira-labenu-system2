import { Request, Response } from "express";
import {TurmaDataBase} from "../data/TurmaDataBase";
import { TurmaModel } from "../model/TurmaModel";

export default async function postTurma(req:Request, res:Response):Promise<void>{
    try {
        const {nome, modulo} = req.body
        const id = Date.now().toString()

        const turma = new TurmaModel(id, nome, modulo)
        const turmaDB = new TurmaDataBase()

        await turmaDB.insert(turma)
        res.status(201).send("Turma adicionada com sucesso")

    } catch (error:any) {
        res.status(500).send(error.message || error.sqlMessage)
    }
}