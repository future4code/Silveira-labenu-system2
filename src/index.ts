import { app } from "./app"
import getTurma from "./endpoints/getTurma";
import postTurma from './endpoints/postTurma';
import { DocenteController } from './endpoints/docenteController';

app.post("/turma", postTurma);

app.get("/turma", getTurma);

const docenteController = new DocenteController();

app.post("/docente", docenteController.postDocente);

app.get("/docente", docenteController.getDocente);