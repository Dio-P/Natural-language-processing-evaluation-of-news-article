import { handleSubmit } from "../src/client/js/formHandler";
import { CreateNURL } from "../src/client/js/formHandler";
// import { handleSubmit } from "../src/client/js/formHandler";


describe("Test: 'handleSubmit()'", () => {
    test('Should be defined', () => {
        expect(handleSubmit).toBeDefined();
    });

    test('Should be a function', () => {
        expect(typeof handleSubmit).toBe("function");
    });
});

describe("Test: 'CreateNURL'", () => {
    test('Should be defined', () => {
        formText =[
            "https://example.com",
            "http://example.com",
            "example.com",
            "example.com/path",
            "https://www.example.com",
            "www.example.com"
        ];
        formText.forEach(formText => {
            expect(validateUrl(formText)).toBeTruthy;
        });
        test('It should be return false if invalid URL is passed into it', () => {
            expect(validateUrl("google.")).toBeFalsy();
        });
    });
    });