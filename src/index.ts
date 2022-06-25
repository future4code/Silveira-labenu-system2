
import {app} from "./app"
import { ClassRomController} from "./endpoints/ClassRomController";
import { DocenteController } from './endpoints/DocenteController';
import { StudentController } from "./endpoints/StudentController";
import { HobbyController } from "./endpoints/HobbyController";
import { SpecialtyController } from "./endpoints/SpecialtyController";
import { TSController } from "./endpoints/TSController";
import { SHController } from "./endpoints/SHController";

const classRomController = new ClassRomController()

app.post("/classRom", classRomController.postClassRom);
app.get("/classRom", classRomController.getClassRom);
app.put("/classRom/:id", classRomController.putClassRom);

const docenteController = new DocenteController();

app.post("/docente", docenteController.postDocente);
app.get("/docente", docenteController.getDocente);
app.put("/docente/:id", docenteController.putDocente);

const studentController = new StudentController()

app.post("/student", studentController.postStudent);
app.get("/student", studentController.getStudent);
app.put("/student/:id", studentController.putStudent)

const specialtyController = new SpecialtyController()

app.post("/specialty", specialtyController.postSpecialty)

const hobbyController = new HobbyController()

app.post("/hobby", hobbyController.postHobby)

const tSController = new TSController()

app.post("/specialty-teacher", tSController.postTS)

const sHController = new SHController()

app.post("/hobby-student", sHController.postSH)

