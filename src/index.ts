import {app} from "./app"
import { ClassRomController} from "./endpoints/ClassRomController";
import { TeacherController } from './endpoints/TeacherController';
import { StudentController } from "./endpoints/StudentController";
import { HobbyController } from "./endpoints/HobbyController";
import { SpecialtyController } from "./endpoints/SpecialtyController";
import { TSController } from "./endpoints/TSController";
import { SHController } from "./endpoints/SHController";

const classRomController = new ClassRomController()
app.post("/classRom", classRomController.postClassRom);
app.get("/classRom", classRomController.getClassRom);
app.put("/classRom/:id", classRomController.putClassRom);

const docenteController = new TeacherController();
app.post("/teacher", docenteController.postTeacher);
app.get("/teacher", docenteController.getTeacher);
app.put("/teacher/:id", docenteController.putTeacher);

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

