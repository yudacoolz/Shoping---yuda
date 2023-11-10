import { useContext, useEffect, useState } from "react";
import { useLogin } from "../../hooks/useLogin"
import Button from "../Elements/Button"
import { useSelector } from "react-redux";
import { DarkMode } from "../../context/DarkMode";

const Navbar = () => {
    const username = useLogin();
    const [totalCart, setTotalCart] = useState(0);
    const {isDarkMode, setIsDarkMode} = useContext(DarkMode);

    const cart = useSelector((state) => state.cart.data);

    useEffect(() => {
        const sum = cart.reduce((acc, item) => {
            return acc + item.qty;
        }, 0);
        setTotalCart(sum);
    }, [cart]);

    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.href = "/login"
    }
    return(
        <div className="flex justify-end items-center px-10 h-20 bg-blue-700 text-white gap-5"
        >
            {username}
        <Button onClick={handleLogout}>Logout</Button>
        <div className="ml-5 mr-5 flex items-center bg-gray-800 p-2 rounded-md">
            <div>
                {totalCart}
            </div>
        </div>
        <Button 
        className=" bg-black  px-10 mx-5 text-white rounded"
        onClick={() => setIsDarkMode(!isDarkMode)}
        >
            {isDarkMode ? "Light" : "Dark"}
        </Button>
        </div>
    )
}

export default Navbar;