import {app} from "./app"
import { TurmaController } from "./endpoints/TurmaController";
import { DocenteController } from './endpoints/DocenteController';
import { StudentController } from "./endpoints/StudentController";
import { EspecialidadeController } from "./endpoints/EspecialidadeController";
import { HobbyController } from "./endpoints/HobbyController";
import { DocEspController } from "./endpoints/DocEspController";
import { EstHobbyController } from "./endpoints/EstHobbyController";

const turmaController = new TurmaController()

app.post("/turma", turmaController.postTurma);
app.get("/turma", turmaController.getTurma);

const docenteController = new DocenteController();

app.post("/docente", docenteController.postDocente);
app.get("/docente", docenteController.getDocente);
app.put("/docente/:id", docenteController.putDocente);

const studentController = new StudentController()

app.post("/estudante", studentController.postStudent);
app.get("/estudante", studentController.getStudent);

const especialidadeController = new EspecialidadeController()

app.post("/especialidade", especialidadeController.postEspecialidade)

const hobbyController = new HobbyController()

app.post("/hobby", hobbyController.postHobby)

const espDocController = new DocEspController()

app.post("/especialidade-docente", espDocController.postDocEsp)

const estHobbyController = new EstHobbyController()

app.post("/hobby-estudante", estHobbyController.postEstHobby)