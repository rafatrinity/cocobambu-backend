"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigService = void 0;
const dotenv = require("dotenv");
const fs = require("fs");
class ConfigService {
    constructor(filePath) {
        this.envConfig = dotenv.parse(fs.readFileSync(filePath));
    }
    get(key) {
        console.log(this.envConfig['DATABASE_PASSWORD']);
        return this.envConfig['DATABASE_PASSWORD'];
    }
}
exports.ConfigService = ConfigService;
//# sourceMappingURL=config.service.js.map