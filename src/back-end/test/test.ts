import request from 'supertest';
import app from '../../app';
import db from '../db/connection';

afterAll(()=> {
    return db.end()
});
// add type once ran test
describe("/", () => {
    describe("GET", () => {
        test("Status 200 - returns message - all ok", async () => {
            const {body} = await request(app)
            .get("/")
            .expect(200)
            expect(body).toEqual({"msg":"all ok"})
        })
    })
})

describe("/api/definitions", () => {
    describe("GET", () => {
        test("Status 200 - returns object with word keys and definition values on key of words ", async () => {
            const {body} = await request(app)
            .get("/api/definitions")
            .expect(200)
            expect(body.words).toEqual({
                "hello": "A greeting",
                "circle": "A shape",
                "walk": "To step with each foor in turn and move in a forward direction"
            })
        })
})
})