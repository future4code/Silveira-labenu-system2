
import {app} from "./app"
import { TurmaController } from "./endpoints/TurmaController";
import { TeacherController } from './endpoints/TeacherController';
import { StudentController } from "./endpoints/StudentController";
import { EspecialidadeController } from "./endpoints/EspecialidadeController";
import { HobbyController } from "./endpoints/HobbyController";
import { DocEspController } from "./endpoints/DocEspController";
import { EstHobbyController } from "./endpoints/EstHobbyController";

const turmaController = new TurmaController()
app.post("/turma", turmaController.postTurma);
app.get("/turma", turmaController.getTurma);

const docenteController = new TeacherController();
app.post("/teacher", docenteController.postTeacher);
app.get("/teacher", docenteController.getTeacher);
app.put("/teacher/:id", docenteController.putTeacher);

const studentController = new StudentController()
app.post("/estudante", studentController.postStudent);
app.get("/estudante/:nome", studentController.getStudent);
app.put("/estudante/:id", studentController.putStudent)

const especialidadeController = new EspecialidadeController()
app.post("/especialidade", especialidadeController.postEspecialidade)

const hobbyController = new HobbyController()
app.post("/hobby", hobbyController.postHobby)

const espDocController = new DocEspController()
app.post("/especialidade-docente", espDocController.postDocEsp)

const estHobbyController = new EstHobbyController()
app.post("/hobby-estudante", estHobbyController.postEstHobby)

