import axios from "axios";

const api = axios.create({
  baseURL: "https://ecommerceserratec.herokuapp.com",
});

export default api;