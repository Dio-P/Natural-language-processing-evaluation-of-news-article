
import axios from 'axios';

// create a new url object from the form input
function CreateNURL(formText){
    let url = new URL(formText);
    return url;
}

// this is the main function that gets the url value from the form and post it to the server
async function handleSubmit(event) {
    event.preventDefault();
    document.getElementById("url").classList.remove('error');
    let formText = zeroInput()
    function zeroInput(){
        let textInput = document.getElementById('url').value;
        if(textInput.length <1){
            document.getElementById("url").classList.add('error');
            alert("Error! Url needs to be added");
            throw new Error("Error! URL needs to be added");
        }else{
            return textInput
        }

    }
    console.log("formText=>", formText);
    const newUrl = CreateNURL(formText);
    console.log("newUrl=>", newUrl);
    console.log("data to be posted ");
    let post = await Client.postData("http://localhost:3000/url", {newUrl})
    .then(getingDataFromServer())
};

async function getingDataFromServer(){
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

export { handleSubmit, getingDataFromServer}