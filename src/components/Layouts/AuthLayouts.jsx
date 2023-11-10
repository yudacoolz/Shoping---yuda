import { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkMode } from "../../context/DarkMode";


const AuthLayout = (props) => {
const {children, type, title} = props;
const {isDarkMode, setIsDarkMode} = useContext(DarkMode);
{
    console.log(isDarkMode);    
}
return(
    <div className={`min-h-screen  flex justify-center items-center ${isDarkMode && "bg-slate-900"}`}>
    <div className="w-full max-w-xs">
        <button 
        className="absolute right-2 top-2 bg-blue-600 p-2 text-white rounded"
        onClick={() => setIsDarkMode(!isDarkMode)}
        >
            {isDarkMode ? "Light" : "Dark"}
        </button>
        <h1 className="text-blue-800 text-3xl font-bold mb-2">{title}</h1>
        <p className="font-medium text-[#1e1e1e] mb-8">
        Welcome, please enter the data
        </p>
        {children}
        <Navigation type={type}/>
    </div>
    </div>
    );
}

const Navigation = ({type}) => {
    if ( type === 'login') {
    return(
        <p className="mt-5 text-center">
        dont have an accout ? {" "}
        <Link to="/register" className="underline text-blue-600 font-semibold">Register</Link>
        </p>
    );
    } else {
        return(
            <p className="mt-5 text-center">
            Already have an accout ? {" "}
                <Link to="/login" className="underline text-blue-600 font-semibold">Login</Link>
            </p>
        );
    }
}

export default AuthLayout;