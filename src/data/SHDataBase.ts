import { SHModel } from "../model/SHModel";
import { BaseDatabase } from "./BaseDatabase";

export class SHDataBase extends BaseDatabase{
    public async insert(studentHobby:SHModel){
        try {
            await BaseDatabase.connection("estudante_hobby")
            .insert({
                id:studentHobby.getId(),
                estudante_id:studentHobby.getEstudanteId(),
                hobby_id:studentHobby.getHobbyId()
            })
        } catch (error:any) {
            throw new Error("unexpected error")
        }
    }
}