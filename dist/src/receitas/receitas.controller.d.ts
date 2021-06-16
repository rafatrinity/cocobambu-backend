/// <reference types="mongoose" />
import { ReceitasService } from './receitas.service';
import { CreateReceitaDto } from './dto/create-receita.dto';
import { UpdateReceitaDto } from './dto/update-receita.dto';
export declare class ReceitasController {
    private readonly receitasService;
    constructor(receitasService: ReceitasService);
    create(createReceitaDto: CreateReceitaDto): Promise<import("./entities/receita.entity").Receita & import("mongoose").Document<any, any>>;
    findAll(): Promise<import("./entities/receita.entity").Receita[]>;
    findOne(id: string): string;
    update(id: string, updateReceitaDto: UpdateReceitaDto): string;
    remove(id: string): string;
}
