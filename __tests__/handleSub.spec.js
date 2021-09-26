import { handleSubmit } from "../src/client/js/formHandler";
import { CreateNURL } from "../src/client/js/formHandler";
// import { handleSubmit } from "../src/client/js/formHandler";


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

    // test("Should be gettin the url from the coresonding dom element", async () => {
    //     const event = {
    //         preventDefault: () => {}
    //     };

    //     await handleSubmit(event);

    //     expect(event.preventDefault).toHaveBeenCalled()
    //     expect(document.getElementById).toHaveBeenCalledWith('url');
    // })
});


// describe("Test: 'CreateNURL'", () => {
//     test('Should be defined', () => {
//         formText =[
//             "https://example.com",
//             "http://example.com",
//             "example.com",
//             "example.com/path",
//             "https://www.example.com",
//             "www.example.com"
//         ];
//         formText.forEach(formText => {
//             expect(validateUrl(formText)).toBeTruthy;
//         });
//         test('It should be return false if invalid URL is passed into it', () => {
//             expect(validateUrl("localhost.")).toBeFalsy();
//         });
//     });
    // });