"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const receitas_service_1 = require("./receitas.service");
describe('ReceitasService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [receitas_service_1.ReceitasService],
        }).compile();
        service = module.get(receitas_service_1.ReceitasService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=receitas.service.spec.js.map