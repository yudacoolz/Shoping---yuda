import { login } from "../../services/auth.service";
import Button from "../Elements/Button";
import Inputform from "../Elements/Inputs";
import { useRef, useEffect, useState } from "react";


const FormLogin = () => {

const [loginFailed, setLoginFailed] = useState("")
const handleLogin = (event) => {
    event.preventDefault();
    // localStorage.setItem('email', event.target.email.value );
    // localStorage.setItem('password', event.target.password.value );
    // emailnya yg di atas dari name

    // window.location.href = "/products";
    const data = {
        username: event.target.username.value,
        password: event.target.password.value,
    }
    login(data, (status, res) => {
        if (status) {
            console.log(res);
            localStorage.setItem('token', res);
            window.location.href = "/products";
        } else {
            console.log(res.response.data);
            setLoginFailed(res.response.data);
        }
    });
}; 

useEffect(() => {
    usernameRef.current.focus(); 
}, []);
const usernameRef = useRef(null);
return(
    <form onSubmit={handleLogin}>
        <Inputform
            label="Username"
            type="text" 
            name="username"
            placeholder="yudacoolz"
            ref={usernameRef}
        />
        <Inputform
            label="Password"
            type="password" 
            name="password"
            placeholder="****"
        />

    <Button type="submit" classname="bg-blue-700 w-full">Login</Button>
    {loginFailed && 
        <p className="text-red-500 mt-5 text-center">{loginFailed}</p>
    }
    </form>
);
};

export default FormLogin;