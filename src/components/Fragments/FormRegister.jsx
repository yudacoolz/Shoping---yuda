import Button from "../Elements/Button";
import Inputform from "../Elements/Inputs";

const FormRegister = () => {
return(
    <form action="">
        <Inputform
            label="Fullname"
            type="text" 
            name="fullname"
            placeholder="insert your name here"
        />
        <Inputform
            label="Email"
            type="email" 
            name="email"
            placeholder="example@gmail.com"
        />
        <Inputform
            label="Password"
            type="password" 
            name="password"
            placeholder="****"
        />
        <Inputform
            label="Confirm Password"
            type="password" 
            name="confirmPassword"
            placeholder="****"
        />

    <Button classname="bg-blue-700 w-full">Register</Button>
    </form>
);
};

export default FormRegister;