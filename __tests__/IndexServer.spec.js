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

describe("test the result is posted", () => {
    test("It should responce the post method", () => {
        
        // const apiCall= jest.fn();
        // let inputBox = {"agreement": 'DISAGREEMENT',
        //                     "subjectivity": 'SUBJECTIVE',
        //                     "confidence": '86',
        //                     "irony": 'NONIRONIC'};
        request(app)
        .post("/url")
        // .expect(Object.is(sent, expected)).toBe(true)
        // .expect(typeof apiCall).toBe("object")
        .then(apiCall => {
            console.log(apiCall);
            expect(typeof apiCall).toBe("function");
    });
        // .send(apiCall)
        // .end(function(err, res) {
        //     if (err) throw err;
        //   });

        });
    });

//////////////////////
// app.post("/url", apiCall)