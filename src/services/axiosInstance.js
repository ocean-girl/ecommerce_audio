import axios from "axios";


export const productInstance = axios.create({
    baseURL: "http://localhost:5000/products",
    // headers: {"X-Custom-Header":"foobar"}
});

// auth instance