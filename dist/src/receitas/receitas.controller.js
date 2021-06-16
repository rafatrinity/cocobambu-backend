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
exports.ReceitasController = void 0;
const common_1 = require("@nestjs/common");
const receitas_service_1 = require("./receitas.service");
const create_receita_dto_1 = require("./dto/create-receita.dto");
const update_receita_dto_1 = require("./dto/update-receita.dto");
let ReceitasController = class ReceitasController {
    constructor(receitasService) {
        this.receitasService = receitasService;
    }
    create(createReceitaDto) {
        return this.receitasService.create(createReceitaDto);
    }
    findAll() {
        return this.receitasService.findAll();
    }
    findOne(id) {
        return this.receitasService.findOne(id);
    }
    update(id, updateReceitaDto) {
        return this.receitasService.update(id, updateReceitaDto);
    }
    remove(id) {
        return this.receitasService.remove(id);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_receita_dto_1.CreateReceitaDto]),
    __metadata("design:returntype", void 0)
], ReceitasController.prototype, "create", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ReceitasController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReceitasController.prototype, "findOne", null);
__decorate([
    common_1.Patch(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_receita_dto_1.UpdateReceitaDto]),
    __metadata("design:returntype", void 0)
], ReceitasController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReceitasController.prototype, "remove", null);
ReceitasController = __decorate([
    common_1.Controller('receitas'),
    __metadata("design:paramtypes", [receitas_service_1.ReceitasService])
], ReceitasController);
exports.ReceitasController = ReceitasController;
//# sourceMappingURL=receitas.controller.js.map