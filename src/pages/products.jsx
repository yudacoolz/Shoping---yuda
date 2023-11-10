import CardProduct from "../components/Fragments/CardProduct";
import { Fragment, useState, useEffect, useContext } from "react";
import { getProducts } from "../services/product.service";
import { useLogin } from "../hooks/useLogin";
import TableCart from "../components/Fragments/TableCart";
import Navbar from "../components/Layouts/Navbar";
import { DarkMode } from "../context/DarkMode";

// const products = [
//     {
//         id: 1,
//         name: "Laptop Baru",
//         price: 1000000,
//         image: "/images/laptop-1.jpg",
//         description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem iusto eaque accusamus nulla maxime unde, dolor molestiae quibusdam iste, pariatur obcaecati velit veritatis dicta praesentium recusandae ut ex excepturi`
//     },
//     {
//         id: 2,
//         name: "Laptop Baru 2",
//         price: 2000000,
//         image: "/images/laptop-2.jpg",
//         description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.`
//     },
//     {
//         id: 3,
//         name: "Laptop Baru 3",
//         price: 3000000,
//         image: "/images/laptop-2.jpg",
//         description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.`
//     },
// ]

const ProductsPage = () => {

// const [cart, setCart] = useState([]);
// const [totalPrice, setTotalPrice] = useState(0);
const [products, setProducts] = useState([]);
const {isDarkMode, setIsDarkMode} = useContext(DarkMode);

 useLogin();

// useEffect(() => {
//     setCart(JSON.parse(localStorage.getItem("cart")) || []);
// }, []);

useEffect(() => {
    getProducts((data) => {
        setProducts(data);
    });
}, [])




// const handleAddToCart = (id) => {
//     // setCart([
//     //     // utk masukin data sebelumnya, pakai ... atau namanya spread operator
//     //     ...cart,
//     //     {
//     //         id,
//     //         qty: 1,
//     //     },
//     // ])
//     if (cart.find(item => item.id === id)) {
//         setCart(
//             cart.map((item) =>
//             item.id === id ? {...item, qty: item.qty + 1} : item
//         ))

//     } else {
//         setCart([...cart, {id,qty: 1,}]);
//     }

// }

// useRef

// const CartRef = useRef(JSON.parse(localStorage.getItem("cart")) || []);

// const handleAddToCartRef = (id) => {
//     CartRef.current = [...CartRef.current, {id, qty:1}];
//     localStorage.setItem("cart", JSON.stringify(CartRef.current));
// };


    return (
        <Fragment>
        <Navbar/>
        <div className={`flex justify-center py-5 ${isDarkMode && "bg-slate-900"}`}>
            <div className="w-4/6 flex flex-wrap">
            {products.length > 0 &&
            products.map((product) => (
            <CardProduct key={product.id}>
                <CardProduct.Header image={product.image} id={product.id}/>
                <CardProduct.Body name={product.title}>
                {product.description}
                </CardProduct.Body>
                <CardProduct.Footer 
                price={product.price} 
                // handleAddToCart={handleAddToCart}
                id={product.id}
                />
            </CardProduct>
            ))}
            </div>
            <div className="w-2/6">
                <h1 className="text-3xl text-blue-600 font-semibold ml-5 mb-2">
                    Cart
                </h1>
                <TableCart products={products}/>
                {/* <ul>
                    {cart.map((item) => (
                        <li key={item}> {item.id}</li>
                    ))}
                </ul> */}
                
            </div>
        </div>
        </Fragment>
    );
}

export default ProductsPage;