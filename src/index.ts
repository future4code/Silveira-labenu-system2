import {app} from "./app"
import getTurma from "./endpoints/getTurma";
import postTurma from './endpoints/postTurma';
import { StudentController } from "./endpoints/StudentController";

app.post("/turma", postTurma)
app.get("/turma", getTurma)

















const studentController = new StudentController()


app.post("/estudante", studentController.postStudent)
app.get("/estudante", studentController.getStudent)