import axios from "axios";

//const API = "https://localhost:8080/api"

 export const registerRequest = (user) => axios.post("http://localhost:8080/api/register", user)




