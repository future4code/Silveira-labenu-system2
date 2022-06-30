
import { TSModel } from "../model/TSModel";
import { BaseDatabase } from "./BaseDatabase";

export class TSDataBase extends BaseDatabase{
    public async insert(teacherSpecialty:TSModel){
        try {
            await BaseDatabase.connection("docente_especialidade")
            .insert({
                id:teacherSpecialty.getId(),
                docente_id:teacherSpecialty.getDocenteId(),
                especialidade_id:teacherSpecialty.getEspecialidadeId()
            })
        } catch (error:any) {
            throw new Error("unexpected error")
        }
    }
}