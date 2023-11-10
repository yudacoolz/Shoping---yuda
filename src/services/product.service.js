import axios from "axios";

export const getProducts = (callback) => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
        // console.log(res);
        //untuk langsung ngambil properti namanya "data" dari objek
        callback(res.data);
    }).catch((err) => {
        console.log(err);
    })
}
export const getDetailProduct = (id, callback) => {
    axios
    .get(`https://fakestoreapi.com/products/${id}`)
    .then((res) => {
        console.log(res);
        //untuk langsung ngambil properti namanya "data" dari objek
        callback(res.data);
    }).catch((err) => {
        console.log(err);
    })
}