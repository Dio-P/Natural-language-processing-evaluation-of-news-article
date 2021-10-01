
import { handleSubmit } from "./js/formHandler"
import { postData } from "./js/postFunction"
import { getingDataFromServer } from "./js/formHandler"

import "./styles/resets.scss"
import "./styles/base.scss"
import "./styles/footer.scss"
import "./styles/form.scss"
import "./styles/header.scss"
document.getElementById("subBtn").addEventListener("click", handleSubmit, true);

export {
    handleSubmit,
    postData,
    getingDataFromServer
}