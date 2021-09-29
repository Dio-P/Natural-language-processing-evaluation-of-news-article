const axios = require('axios').default;
require('dotenv').config()
const fetch = require('node-fetch');
const app = require("./app.js");
// API call
// declaring the variables we will need for the axios call
async function apiCall(req, res){

    const baseUrl = "https://api.meaningcloud.com/sentiment-2.1?key=";
    const apiKey = process.env.apiKey;
    const ofType = "&of=json&url=";
    const lang = "&lang=en";
    // getting the URL from the Client
    let nUrl = req.body.data.newUrl;
    console.log("nUrl=>", nUrl);
    const requestOptions=  {
      method: 'POST',
      redirect: 'follow'
    };
    // forming the final url
    let url = (baseUrl+apiKey+ofType+nUrl+lang);
    console.log("url=>", url);
        let options = {
            method: 'GET',
            url: url,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            },
        };
      // axios call
      const response = await axios(options, requestOptions).then( async(response) =>{
        let data = await response.data;
        let inputBox= Object.create({})
        // console.log("inputBoxAfter Cretion Before pushin=>", inputBox);
        console.log("response url =>", response.config.url);
        console.log("response Data is =>", response.data.agreement, response.data.subjectivity, response.data.confidence, response.data.irony);
        inputBox["agreement"]=data.agreement;
        inputBox["subjectivity"]=data.subjectivity;
        inputBox["confidence"]=data.confidence;
        inputBox["irony"]=data.irony;
        console.log("inputBox =>", inputBox);
        return inputBox
      })
  // app.get("/results", async (req,res) => {
  // // console.log("inputBox=>", inputBox)
  // // let inputBox = builtInpBox; ///// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // console.log("/results to be sent")
  // console.log("inputBoxServer =>", inputBox);
  // res.status(200).send(inputBox);
};
// return await inputBox
// let responseOK = response && response.status === 200 && response.statusText === 'OK';
// if (responseOK) {


// async function builtInpBox () {
//       // console.log("response is =>", response);
//       let data = await response.data;
//       let inputBox= Object.create({})
//       // console.log("inputBoxAfter Cretion Before pushin=>", inputBox);
//       inputBox["agreement"]=data.agreement;
//       inputBox["subjectivity"]=data.subjectivity;
//       inputBox["confidence"]=data.confidence;
//       inputBox["irony"]=data.irony;
//       console.log("inputBox =>", inputBox);
//       return await inputBox
// }
// console.log("typeof apiCall =>", typeof apiCall);
// let ApCall = Promise.resolve(apiCall)
// console.log("typeof ApCall =>", typeof ApCall);
// console.log("ApCall =>", ApCall);
let inputBox = async() => {await Promise.resolve(apiCall());}
console.log("typeof inputBox=>", typeof inputBox)
console.log("inputBox =>", inputBox)
  module.exports = {
    apiCall,
    inputBox
  }
