import { DocenteModel } from "../model/DocenteModel";
import { ClassRomModel } from "../model/TurmaModel";
import { BaseDatabase } from "./BaseDatabase";
import { DocenteDataBase } from "./DocenteDataBase";

export class ClassRomDataBase extends BaseDatabase{
    public async insert(classRom:ClassRomModel){
        try{
        await BaseDatabase.connection("turma")
        .insert({
            id: classRom.getId(),
            nome: classRom.getNome(),
            modulo: classRom.getModulo()
        })
       } catch(error:any){
            throw new Error("Unexpected error")
       }
    }
    public async select(){
        try {
            const result = await BaseDatabase.connection("turma")
            .select("*")
            return result
        } catch (error:any) {
            throw new Error("Unexpected error")
        }
    }
    public async update(id: string, modulo: number){
        try{
            await BaseDatabase.connection("turma")
            .update({modulo: modulo})
            .where("id" , "=", id)
        } catch(error: any) {
            throw new Error("Unexpected error");
        }
    }
}

// export class IdDocenteDataBase extends DocenteDataBase implements BaseDatabase{
//     public async select(){
//         try {
//             const result = await BaseDatabase.connection("docente")
//             .select("*")
//             return result
//         } catch (error) {
//             throw new Error("Erro Inesperado")
//         }
//     }
// }

