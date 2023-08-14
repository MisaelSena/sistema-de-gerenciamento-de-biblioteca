//Projeto Biblioteca
import { Usuario } from "./Usuario";
import { Aluno } from "./Aluno";
import { Professor } from "./Professor";

const aluno1 = new Aluno(1, "Elthon", 123, "Backend");
const professor1 = new Professor(2,"Alcides", aluno1);

console.log(aluno1);
console.log(professor1);