//Projeto Biblioteca
import { Usuario } from "./Usuario";
import { Aluno } from "./Aluno";
import { Professor } from "./Professor";

const aluno1 = new Aluno(1, "Ronaldo", 123, "Backend");
const aluno2 = new Aluno(2, "Messi", 124, "Backend");
const aluno3 = new Aluno(3, "CR7", 125, "Backend");

const professor1 = new Professor(4,"Alcides");//Deixei o terceiro argumento array de Alunos como opcional na classe professor.
professor1.setAlunos(aluno1);
professor1.setAlunos(aluno2);
professor1.setAlunos(aluno3);


console.log(professor1);