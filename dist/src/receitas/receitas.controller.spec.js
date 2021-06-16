"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const receitas_controller_1 = require("./receitas.controller");
const receitas_service_1 = require("./receitas.service");
describe('ReceitasController', () => {
    let controller;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [receitas_controller_1.ReceitasController],
            providers: [receitas_service_1.ReceitasService],
        }).compile();
        controller = module.get(receitas_controller_1.ReceitasController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=receitas.controller.spec.js.map