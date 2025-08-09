import axios from "axios"

const api = axios.create({
    base_URL: "http://localhost:5001/api" 
}) 

export default api