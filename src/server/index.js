var path = require('path');
require('dotenv').config()

// importing function and object from the API call function
const mockApi = require("./mockAPI");
const apiCall = mockApi.apiCall;
// let builtInpBox = mockApi.InpBox;
let inputBox = mockApi.inputBox;
// let inputBox = Promise.resolve(mockApi.apiCall);

// importing app instance from app.js
const app = require("./app.js");

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})

// when we get the url from the Client tha apiCall function is activated
app.post("/url", apiCall)

// app.get("/results", function(req,res){
//   let inputBox = apiCall;
//   // console.log("inputBox=>", inputBox)
//   // let inputBox = builtInpBox; ///// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//   console.log("inputBoxServer =>", inputBox);
//   res.status(200).send(inputBox);
// });

