
import axios from 'axios';

// create a new url object from the form input
function CreateNURL(formText){
    let url = new URL(formText);
    return url;
}

// post function 
async function postData( url = " ", data = {}){
    try {
        const response = await axios.post(url, {data})
        return response; 
    } catch (error) {
        console.error(error);
    }
}


// this is the main function that gets the url value from the form and post it to the server
async function handleSubmit(event) {
    event.preventDefault();
    let formText = document.getElementById('url').value;
    console.log("formText=>", formText);
    const newUrl = CreateNURL(formText);
    console.log("newUrl=>", newUrl);
    postData("/url", {newUrl})


   // updating the U.I.
   const respons= await axios.get('http://localhost:3000/results')
    try {
        let response = await respons.data;
        console.log("response=>", response);
        document.getElementById('results').innerHTML = `Agreement : ${response.agreement} <br>  Subjectivity : ${response.subjectivity} <br> Confidence : ${response.confidence} <br>  Irony : ${response.irony}` 
        return response
    }catch(error){
        console.log("error", error);
    }
}

export { handleSubmit, }