import { DocEspModel } from "../model/DocEspModel";
import { BaseDatabase } from "./BaseDatabase";

export class DocEspDataBase extends BaseDatabase{
    public async insert(docEsp:DocEspModel){
        try {
            await BaseDatabase.connection("docente_especialidade")
            .insert({
                id:docEsp.getId(),
                docente_id:docEsp.getDocenteId(),
                especialidade_id:docEsp.getEspecialidadeId()
            })
        } catch (error) {
            throw new Error("Erro inesperado, tente novamente")
        }
    }
}