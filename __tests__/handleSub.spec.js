import { handleSubmit } from "../src/client/js/formHandler";
import { CreateNURL } from "../src/client/js/formHandler";

global.document = {
    getElementsById: () => { return { value: 'http://google.com' } }
}

describe("Test: 'handleSubmit()'", () => {
    test('Should be defined', () => {
        expect(handleSubmit).toBeDefined();
    });

    test('Should be a function', () => {
        expect(typeof handleSubmit).toBe("function");
    });
});
