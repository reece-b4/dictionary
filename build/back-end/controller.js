"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = __importDefault(require("./model"));
function getDefinitions(req, res) {
    (0, model_1.default)().then((words) => {
        res.status(200).send({ words: words });
    });
}
exports.default = getDefinitions;
