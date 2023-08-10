import { Usuario } from "./Usuario";

export class Aluno extends Usuario{
    private matricula: number;
    private turma: string;

    constructor(id: number, nome: string, matricula: number, turma: string){
        super(id, nome)
        this.matricula = matricula;
        this.turma = turma;
    }

    getMatricula():number{
        return this.matricula;
    }
    setMatricula(matricula:number){
        this.matricula = matricula;
    }

    getTurma():string{
        return this.turma;
    }

    setTurma(turma:string){
        this.turma = turma;
    }
}