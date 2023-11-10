import { createContext, useState } from "react";

const DarkModeContext = createContext();

const DarkModeContextProvider = ({children}) => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    return(
        // ada value yang dikirimkan, yaitu state yang bisa diakses secara global 
        <DarkModeContext.Provider value={{isDarkMode, setIsDarkMode}}>
            {children}
        </DarkModeContext.Provider>
    )
}

// contextnya
export const DarkMode = DarkModeContext;
// providernya, sama kek redux
export default DarkModeContextProvider;


// react usecontext berguna utk mengambil sebuah state yang di definisikan di paling luar tapi kita bisa langsung ambil langsung tanpa props