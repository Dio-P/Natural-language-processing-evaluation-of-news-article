
import { handleSubmit } from "./js/formHandler"
import { postData } from "./js/postFunction"
import { getingDataFromServer } from "./js/formHandler"

import "./styles/resets.scss"
import "./styles/base.scss"
import "./styles/footer.scss"
import "./styles/form.scss"
import "./styles/header.scss"
document.getElementById("subBtn").addEventListener("click", handleSubmit, true);

// const evtSource = new EventSource("http://localhost:3000/results");
// evtSource.onmessage = function(event) {
//     const inputSent = res.status(200).send(inputBox);
   
//   }
// const source = new EventSource('http://localhost:3000/results');
// console.log(source.withCredentials);
// source.onopen = function() {
//     header('Content-Type: text/event-stream');
//     header('Cache-Control: no-cache');
//     header('Connection: keep-alive');
//     header('X-Accel-Buffering: no');
//    console.log('connection to stream has been opened');
//    console.log(source.withCredentials);
// };
export {
    handleSubmit,
    postData,
    getingDataFromServer
}