export class CreateReceitaDto {
    nome: string;
    desc: string;
    ingredientes: Array<string>;
    preparo: {
        tempo: string;
        passos: Array<string>;
    }
    image:{
        thumb:string;
        foto:string;
    }
}

