import { handleSubmit } from "../src/client/js/formHandler";


describe("Test: 'handleSubmit()'", () => {
    test('Should be defined', () => {
        expect(handleSubmit).toBeDefined();
    });

    test('Should be a function', () => {
        expect(typeof handleSubmit).toBe("function");
    });
});