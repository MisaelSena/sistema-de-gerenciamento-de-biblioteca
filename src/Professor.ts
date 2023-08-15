import { Aluno } from "./Aluno";
import { Usuario } from "./Usuario";

export class Professor extends Usuario{
    private alunos: Aluno[];
    //Terceiro argumento array de Alunos como opcional.
    constructor(id: number, nome: string, alunos: Aluno[] = []){
        super(id, nome)
        this.alunos = [];
    }

    getAlunos():Aluno[]{
        return this.alunos;
    }

    setAlunos(aluno:Aluno){
        this.alunos.push(aluno);
    }    

}