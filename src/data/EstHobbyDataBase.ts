import { EstHobbyModel } from "../model/EstHobbyModel";
import { BaseDatabase } from "./BaseDatabase";

export class EstHobbyDataBase extends BaseDatabase{
    public async insert(estHobby:EstHobbyModel){
        try {
            await BaseDatabase.connection("estudante_hobby")
            .insert({
                id:estHobby.getId(),
                estudante_id:estHobby.getEstudanteId(),
                hobby_id:estHobby.getHobbyId()
            })
        } catch (error) {
            throw new Error("Erro inesperado, tente novamente")
        }
    }
}