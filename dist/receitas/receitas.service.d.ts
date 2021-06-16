import { Model } from "mongoose";
import { CreateReceitaDto } from "./dto/create-receita.dto";
import { UpdateReceitaDto } from "./dto/update-receita.dto";
import { Receita, ReceitaDocument } from "./entities/receita.entity";
export declare class ReceitasService {
    private receitaModel;
    constructor(receitaModel: Model<ReceitaDocument>);
    create(createReceitaDto: CreateReceitaDto): Promise<ReceitaDocument>;
    findAll(): Promise<Receita[]>;
    findOne(id: string): import("mongoose").Query<ReceitaDocument, ReceitaDocument, {}>;
    update(id: string, updateReceitaDto: UpdateReceitaDto): import("mongoose").Query<ReceitaDocument, ReceitaDocument, {}>;
    remove(id: string): import("mongoose").Query<{
        ok?: number;
        n?: number;
    } & {
        deletedCount?: number;
    }, ReceitaDocument, {}>;
}
