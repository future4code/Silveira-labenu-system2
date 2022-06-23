import { Request, Response } from "express";
import { TurmaDataBase } from "../data/TurmaDataBase";

export default async function getTurma(req:Request, res:Response):Promise<void> {
    try {
        const turmaDB = new TurmaDataBase()

        const turma = await turmaDB.select()

        res.status(200).send(turma)
    } catch (error:any) {
        res.status(500).send(error.message || error.sqlMessage)
    }
}