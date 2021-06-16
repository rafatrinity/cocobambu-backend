"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateReceitaDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_receita_dto_1 = require("./create-receita.dto");
class UpdateReceitaDto extends mapped_types_1.PartialType(create_receita_dto_1.CreateReceitaDto) {
}
exports.UpdateReceitaDto = UpdateReceitaDto;
//# sourceMappingURL=update-receita.dto.js.map