const request = require("supertest");
const { response } = require("../src/server/index.js");
const app = require("../src/server/app.js");
const apiCall= require("../src/server/mockAPI.js");


describe("test that the server function is working", () => {
    test("It should responce the GET method", () => {
        return request(app)
        .post("/url")
        .then(response => {
            expect(response).toHaveBeenCalledWith("apiCall");

        });
    });
});