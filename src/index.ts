import {app} from "./app"
import { TurmaController } from "./endpoints/TurmaController";
import { DocenteController } from './endpoints/docenteController';
import { StudentController } from "./endpoints/StudentController";

const turmaController = new TurmaController()

app.post("/turma", turmaController.postTurma);
app.get("/turma", turmaController.getTurma);

const docenteController = new DocenteController();

app.post("/docente", docenteController.postDocente);
app.get("/docente", docenteController.getDocente);

const studentController = new StudentController()

app.post("/estudante", studentController.postStudent);
app.get("/estudante", studentController.getStudent);