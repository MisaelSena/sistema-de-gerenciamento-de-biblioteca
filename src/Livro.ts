export class Livro {
    private id: number;
    private titulo: string;
    private autor: string;
    private anoPublicacao: number;
    private genero: string;
    private quantidadeExemplares: number;

    constructor(id: number, titulo: string, autor: string, anoPublicacao: number, genero: string, quantidadeExemplares: number) {
        this.id = id;
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
        this.genero = genero;
        this.quantidadeExemplares = quantidadeExemplares;
    }

    //Getters e Setters

    getId():number{
        return this.id;
    }

    setID(id:number){
        this.id = id;
    }

    getTitulo():string{
        return this.titulo;
    }

    setTitulo(titulo:string){
        this.titulo = titulo;
    }

    getAutor():string{
        return this.autor;
    }

    setAutor(autor:string){
        this.autor = autor;
    }

    getAnoPublicacao():number{
        return this.anoPublicacao;
    }

    setAnoPublicacao(anoPublicacao:number){
        this.anoPublicacao = anoPublicacao;
    }

    getGenero():string{
        return this.genero;
    }

    setGenero(genero:string){
        this.genero = genero;
    }

    getQuantidadeExemplares():number{
        return this.quantidadeExemplares;
    }

    setQuantidadeExemplares(quantidadeExemplares:number){
        this.quantidadeExemplares = quantidadeExemplares;
    }
}