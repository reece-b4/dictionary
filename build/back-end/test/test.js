"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../../app"));
const connection_1 = __importDefault(require("../db/connection"));
afterAll(() => {
    return connection_1.default.end();
});
// add type once ran test
describe("/", () => {
    describe("GET", () => {
        test("Status 200 - returns message - all ok", () => __awaiter(void 0, void 0, void 0, function* () {
            const { body } = yield (0, supertest_1.default)(app_1.default)
                .get("/")
                .expect(200);
            expect(body).toEqual({ "msg": "all ok" });
        }));
    });
});
describe("/api/definitions", () => {
    describe("GET", () => {
        test("Status 200 - returns object with word keys and definition values on key of words ", () => __awaiter(void 0, void 0, void 0, function* () {
            const { body } = yield (0, supertest_1.default)(app_1.default)
                .get("/api/definitions")
                .expect(200);
            expect(body.words).toEqual({
                "hello": "A greeting",
                "circle": "A shape",
                "walk": "To step with each foor in turn and move in a forward direction"
            });
        }));
    });
});
