import { Livro } from "./Livro";
import { Usuario } from "./Usuario";

export class Emprestimo{
    private id: number;
    private dataEmprestimo: string;
    private dataDevolucao: string;
    private usuario: Usuario;
    private livro: Livro[];

    constructor(id: number, dataEmprestimo: string, dataDevolucao: string, usuario: Usuario, livro: Livro[]){
        this.id = id;
        this.dataEmprestimo = dataEmprestimo;
        this.dataDevolucao = dataDevolucao;
        this.usuario = usuario;
        this.livro = [];
    }

    getId():number{
        return this.id;
    }
    setId(id: number){
        this.id = id;
    }
    getDataEmprestimo(): string{
        return this.dataEmprestimo;
    }
    setDataEmprestimos(dataEmprestimo: string){
        this.dataEmprestimo = dataEmprestimo;
    }
    getDataDevolucao():string{
        return this.dataDevolucao;
    }
    setDataDevolucao(dataDevolucao:string){
        this.dataDevolucao = dataDevolucao;
    }
    getUsuario():Usuario{
        return this.usuario;
    }
    setUsuario(usuario:Usuario){
        this.usuario = usuario;
    }
    getLivro():Livro[]{
        return this.livro;
    }
    setLivro(livro:Livro){
        this.livro.push(livro);
    }

}