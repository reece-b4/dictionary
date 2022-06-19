"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
// add types once ran test
process.env.PGDATABASE = "dictionary";
const db = new pg_1.Pool();
exports.default = db;
