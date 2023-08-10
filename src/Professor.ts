import { Aluno } from "./Aluno";
import { Usuario } from "./Usuario";

export class Professor extends Usuario{
    private alunos: Aluno;
    
    constructor(id: number, nome: string, alunos: Aluno){
        super(id, nome)
        this.alunos = alunos;
    }

    getAlunos():Aluno{
        return this.alunos;
    }

    setAlunos(alunos:Aluno){
        this.alunos = alunos;
    }

}