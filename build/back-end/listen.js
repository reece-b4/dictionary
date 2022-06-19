"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("../app"));
const PORT = 9090;
// err type object?
app_1.default.listen(PORT, (err) => {
    // tslint:disable-next-line:no-console
    if (err)
        console.log(err);
    // tslint:disable-next-line:no-console
    else
        console.log('Server listening on port: 9090');
});
