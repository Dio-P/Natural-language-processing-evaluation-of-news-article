const request = require("supertest");
const { response } = require("../src/server/index.js");
const app = require("../src/server/app.js");
const apiCall= require("../src/server/mockAPI.js");


describe("test the result is send back", () => {
    test("It should responce the GET method", () => {
        // let inputBox = {"agreement": 'DISAGREEMENT',
        //                     "subjectivity": 'SUBJECTIVE',
        //                     "confidence": '86',
        //                     "irony": 'NONIRONIC'};
        return request(app)
        .get("/results")
        .then(response => {
            expect(response.statusCode).toBe(200);

        });
    });
});

describe("post/apiCall", () => {
    test("It should responce the post method", async() => {
        // const apiCall= jest.fn
        jest.mock(apiCall)
        app.mockImplementation()
        // const apiCall= jest.fn();
        // let inputBox = {"agreement": 'DISAGREEMENT',
        //                     "subjectivity": 'SUBJECTIVE',
        //                     "confidence": '86',
        //                     "irony": 'NONIRONIC'};
        return request(app)
        const apiCall= jest.fn
        // .post("/url")
        // .expect(Object.is(sent, expected)).toBe(true)
        // .expect(typeof apiCall).toBe("object")
        // .then(apiCall => {
        //     console.log("apiCall=>", apiCall);
        //     expect(typeof apiCall).toBe("function");
        .post("/url")
        .then
            .expect(apiCall).toHaveBeenCalledWith("/url")
    });
        // .send(apiCall)
        // .end(function(err, res) {
        //     if (err) throw err;
        //   });

        });
    // });

//////////////////////
// app.post("/url", apiCall)