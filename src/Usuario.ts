export class Usuario{
    private id: number;
    private nome: string;

    constructor(id:number, nome:string){
        this.id = id;
        this.nome = nome;
    }

    getId():number{
        return this.id;
    }

    setId(id:number){
        this.id = id;
    }

    getNome():string{
        return this.nome;
    }

    setNome(nome:string){
        this.nome = nome;
    }
}