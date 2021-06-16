"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReceitasService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const receita_entity_1 = require("./entities/receita.entity");
let ReceitasService = class ReceitasService {
    constructor(receitaModel) {
        this.receitaModel = receitaModel;
    }
    create(createReceitaDto) {
        const receita = new this.receitaModel(createReceitaDto);
        return receita.save();
    }
    findAll() {
        return this.receitaModel.find().exec();
    }
    findOne(id) {
        return this.receitaModel.findById(id);
    }
    update(id, updateReceitaDto) {
        return this.receitaModel.findByIdAndUpdate({ _id: id }, { $set: updateReceitaDto }, { new: true });
    }
    remove(id) {
        return this.receitaModel.deleteOne({ _id: id });
    }
};
ReceitasService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(receita_entity_1.Receita.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ReceitasService);
exports.ReceitasService = ReceitasService;
//# sourceMappingURL=receitas.service.js.map