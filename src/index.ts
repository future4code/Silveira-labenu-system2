import {app} from "./app"
import getTurma from "./endpoints/getTurma";
import postTurma from './endpoints/postTurma';

app.post("/turma", postTurma)
app.get("/turma", getTurma)