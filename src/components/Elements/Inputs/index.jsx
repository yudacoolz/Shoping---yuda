import Label from "./Label";
import Input from "./input";
import { forwardRef } from "react";

// const Inputform = (props) => {
// const { label, type, name, placeholder, ref } = props;
//     return(
//         <div className="mb-6">
//             <Label htmlfor={name}>{label}</Label>
//             <Input type={type} name={name} placeholder={placeholder} ref={ref}/>
//         </div>
//     );
// };

const Inputform = forwardRef((props, ref) => {
    const { label, type, name, placeholder } = props;
        return(
            <div className="mb-6">
                <Label htmlfor={name}>{label}</Label>
                <Input type={type} name={name} placeholder={placeholder} ref={ref}/>
            </div>
        );
    });

export default Inputform;