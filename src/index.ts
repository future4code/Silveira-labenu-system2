import {app} from "./app"
import { TurmaController } from "./endpoints/TurmaController";
import { DocenteController } from './endpoints/docenteController';

const turmaController = new TurmaController()

app.post("/turma", turmaController.postTurma)
app.get("/turma", turmaController.getTurma)

const docenteController = new DocenteController();

app.post("/docente", docenteController.postDocente);
app.get("/docente", docenteController.getDocente);