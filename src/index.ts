import {app} from "./app"
import { TurmaController } from "./endpoints/TurmaController";




const turmaController = new TurmaController()

app.post("/turma", turmaController.postTurma)
app.get("/turma", turmaController.getTurma)

