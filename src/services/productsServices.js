import { productInstance } from "./axiosInstance"

export const getAllProducts = async () =>{ // (id) para dinamico
    let promise = productInstance.get("/"); // ("/:id") dinamico
    let res = await promise;
    return res.data
}

// falta agregar getById
// create
// update
// delete
// en un dashboard de administrador 