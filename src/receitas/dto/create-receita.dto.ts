export class CreateReceitaDto {
    nome: string;
    desc: string;
    Ingredientes: Array<string>;
    preparo: {
        tempo: string;
        passos: Array<string>;
    }
    image:{
        thumb:string;
        foto:string;
    }
}

