import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:5001/e-commerce-app-21468/us-central1/api"
});

export default instance;