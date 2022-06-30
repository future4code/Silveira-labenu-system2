import { SpecialtyModel } from "../model/SpecialtyModel";
import { BaseDatabase } from "./BaseDatabase";

export class SpecialtyDataBase extends BaseDatabase{
    public async insert(specialty:SpecialtyModel){
        try {
            await BaseDatabase.connection("especialidade")
            .insert({
                id:specialty.getId(),
                nome:specialty.getNome()
            })
        } catch (error:any) {
            throw new Error("unexpected error")
        }
    }
}