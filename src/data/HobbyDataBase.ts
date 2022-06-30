import { HobbyModel } from "../model/HobbyModel";
import { BaseDatabase } from "./BaseDatabase";

export class HobbyDataBase extends BaseDatabase{
    public async insert(hobby:HobbyModel){
        try {
            await BaseDatabase.connection("hobby")
            .insert({
                id:hobby.getId(),
                nome:hobby.getNome()
            })
        } catch (error:any) {
            throw new Error("unexpected error")
        }
    }
}