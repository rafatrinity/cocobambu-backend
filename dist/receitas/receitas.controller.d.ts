/// <reference types="mongoose" />
import { ReceitasService } from './receitas.service';
import { CreateReceitaDto } from './dto/create-receita.dto';
import { UpdateReceitaDto } from './dto/update-receita.dto';
import { Receita } from './entities/receita.entity';
export declare class ReceitasController {
    private readonly receitasService;
    constructor(receitasService: ReceitasService);
    create(createReceitaDto: CreateReceitaDto): Promise<import("./entities/receita.entity").ReceitaDocument>;
    findAll(): Promise<Receita[]>;
    findOne(id: string): import("mongoose").Query<import("./entities/receita.entity").ReceitaDocument, import("./entities/receita.entity").ReceitaDocument, {}>;
    update(id: string, updateReceitaDto: UpdateReceitaDto): import("mongoose").Query<import("./entities/receita.entity").ReceitaDocument, import("./entities/receita.entity").ReceitaDocument, {}>;
    remove(id: string): import("mongoose").Query<{
        ok?: number;
        n?: number;
    } & {
        deletedCount?: number;
    }, import("./entities/receita.entity").ReceitaDocument, {}>;
}
