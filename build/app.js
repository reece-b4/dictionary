"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controller_1 = __importDefault(require("./back-end/controller"));
const app = (0, express_1.default)();
app.get('/', (req, res) => {
    res.status(200).send({ msg: "all ok" });
});
app.get('/api/definitions', controller_1.default);
exports.default = app;
