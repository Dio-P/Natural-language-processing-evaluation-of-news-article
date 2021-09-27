// post function 
export async function postData( url = " ", data = {}){
    try {
        const response = await axios.post(url, {data})
        return response; 
    } catch (error) {
        console.error(error);
    }
}