import { EspecialidadeModel } from "../model/EspecialidadeModel";
import { BaseDatabase } from "./BaseDatabase";

export class EspecialidadeDataBase extends BaseDatabase{
    public async insert(especialidade:EspecialidadeModel){
        try {
            await BaseDatabase.connection("especialidade")
            .insert({
                id:especialidade.getId(),
                nome:especialidade.getNome()
            })
        } catch (error) {
            throw new Error("Erro inesperado, tent novamente")
        }
    }
}