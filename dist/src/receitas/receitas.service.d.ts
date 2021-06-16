import { Model } from 'mongoose';
import { CreateReceitaDto } from './dto/create-receita.dto';
import { UpdateReceitaDto } from './dto/update-receita.dto';
import { Receita } from './entities/receita.entity';
export declare class ReceitasService {
    private receitaModel;
    constructor(receitaModel: Model<Receita>);
    create(createReceitaDto: CreateReceitaDto): Promise<Receita & import("mongoose").Document<any, any>>;
    findAll(): Promise<Receita[]>;
    findOne(id: string): string;
    update(id: string, updateReceitaDto: UpdateReceitaDto): string;
    remove(id: string): string;
}
