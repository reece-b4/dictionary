import {Pool} from "pg";
// add types once ran test
process.env.PGDATABASE = "dictionary";
const db = new Pool();

export default db;