const axios = require('axios').default;
require('dotenv').config()
const fetch = require('node-fetch');
const app = require("./app.js");
// API call
// declaring the variables we will need for the axios call
let inputBox={}
let url = "";
const baseUrl = "https://api.meaningcloud.com/sentiment-2.1?key=";
const apiKey = process.env.apiKey;
const ofType = "&of=json&url=";
const lang = "&lang=en";

let options = {};

const requestOptions=  {
  method: 'POST',
  redirect: 'follow'
};
async function apiCall(req, res){

  let nUrl = req.body.data.newUrl
  url = (baseUrl+apiKey+ofType+nUrl+lang)
    // getting the URL from the Client
    
    
    options = {
      method: 'GET',
      url: url,
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json;charset=UTF-8'
      },
    }
    // forming the final url
    console.log("nUrl=>", nUrl);
    console.log("url=>", url);
    app.get("/results", async (req,res) => {    
      // axios call
      console.log("options=>", options)
      console.log("requestOptions=>", requestOptions)
      const response = await axios(options, requestOptions)
      try{
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
         
          // console.log("inputBox=>", inputBox)
          // let inputBox = builtInpBox; ///// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
          console.log("/inputBox) to be sent")
          console.log("inputBox)Server =>", inputBox);
          res.status(200).send(inputBox)
      }catch(error){
        console.log("error", error)
      }
    })};
        // return inputBox

    


  module.exports = {
    apiCall,
    // inputBox
  }
