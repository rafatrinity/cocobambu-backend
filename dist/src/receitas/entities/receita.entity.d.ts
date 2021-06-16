import { Document } from "mongoose";
export declare type ReceitaDocument = Receita & Document;
declare class Preparo {
    tempo: string;
    passos: Array<string>;
}
export declare class Receita {
    nome: string;
    desc: string;
    Ingredientes: Array<string>;
    preparo: Preparo;
}
export declare const ReceitaSchema: import("mongoose").Schema<Document<Receita, any>, import("mongoose").Model<any, any, any>, undefined>;
export {};
