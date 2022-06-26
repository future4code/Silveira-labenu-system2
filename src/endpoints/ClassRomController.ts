import { Request, Response } from "express";
import { ClassRomModel } from "../model/TurmaModel";
import { ClassRomDataBase } from "../data/ClassRomDataBase";

export class ClassRomController{
    async postClassRom(req:Request, res:Response):Promise<void>{
        try {
            const {nome, modulo} = req.body
            const id = Date.now().toString()

            if( !nome || !modulo ){
                throw new Error ("The name and module must be passed")
                
            }
            if(modulo < 0 || modulo > 6){
                throw new Error ("invalid module")
            }
            const classRom = new ClassRomModel(id, nome, modulo)
            const classRomDB = new ClassRomDataBase()
    
            await classRomDB.insert(classRom)
            res.status(201).send(`Class ${nome} successfully added`)
    
        } catch (error:any) {
            res.status(500).send(error.message || error.sqlMessage)
        }
    }
    async getClassRom(req:Request, res:Response):Promise<void> {
        try {
            const classRomDB = new ClassRomDataBase()
    
            const classRom = await classRomDB.select()
    
            res.status(200).send(classRom)
        } catch (error:any) {
            res.status(500).send(error.message || error.sqlMessage)
        }
    }
    async putClassRom(req: Request, res: Response): Promise<void> {
        try {
            const id = req.params.id
            const modulo = req.body.modulo
            const classRomDB = new ClassRomDataBase()

            await classRomDB.update(id, modulo)
            res.status(201).send('Module successfully changed')

        } catch (error: any) {
            res.status(500).send(error.message || error.sqlMessage)
        }
    }
}
//      async getIdDocente(req:Request, res:Response):Promise<void> {
//          try {
//             const turmaDB = new IdDocenteDataBase()
//              const id = await turmaDB.select()
    
//              res.status(200).send(id)
//          } catch (error:any) {
//              res.status(500).send(error.message || error.sqlMessage)
//          }
//      }
//  }

//  export class IdDocenteController extends TurmaController{
//      async getIdDocente(req:Request, res:Response):Promise<void>{
//          try {
            
//          } catch (error) {
            
//          }
//      }
//  }
