import axios from "axios";

const instance = axios.create({
    baseURL: "https://us-central1-challenge-4b2b2.cloudfunctions.net/api"
});

export default instance;
// http://localhost:5001/e-commerce-app-21468/us-central1/api