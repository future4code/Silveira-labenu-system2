import { Turma } from "../model/Turma";
import { BaseDatabase } from "./BaseDatabase";

export class insertTurma extends Turma{
        async function insertTurma(turma:Turma){
    const {id, nome, modulo} = turma
    await BaseDatabase("turma").insert({
        id,
        nome,
        modulo,
    })
}
}
