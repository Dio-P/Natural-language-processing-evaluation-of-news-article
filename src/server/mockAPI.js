const axios = require('axios').default;
require('dotenv').config()
const fetch = require('node-fetch');
let inputBox = {}
// API call
// declaring the variables we will need for the axios call
async function apiCall(req, res){
    const baseUrl = "https://api.meaningcloud.com/sentiment-2.1?key=";
    const apiKey = process.env.apiKey;
    const ofType = "&of=json&url=";
    const lang = "&lang=en";
    // getting the URL from the Client
    let nUrl = req.body.data.newUrl;
    const requestOptions=  {
      method: 'POST',
      redirect: 'follow'
    };
    // forming the final url
    let url = (baseUrl+apiKey+ofType+nUrl+lang);
        let options = {
            method: 'GET',
            url: url,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            },
        };
    // axios call
const response = await axios(options, requestOptions);
// let responseOK = response && response.status === 200 && response.statusText === 'OK';
// if (responseOK) {
    console.log("response is =>", response);
    let data = await response.data;
    
    inputBox["agreement"]=data.agreement;
    inputBox["subjectivity"]=data.subjectivity;
    inputBox["confidence"]=data.confidence;
    inputBox["irony"]=data.irony;
    console.log(inputBox);
    return inputBox
}

  module.exports = {
    apiCall
  }
