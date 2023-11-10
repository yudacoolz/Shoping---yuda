import { createContext, useContext, useReducer } from "react";

//utk nyimpan statenya
const TotalPriceContext = createContext(null);
//utk nyimpan action" nya
const TotalPriceDispatchContext = createContext(null);

const totalPriceReducer = (state, action) => {
    switch (action.type) {
        case "update": {
            return {
                total: action.payload.total,
            };
        }
        default: {
            throw Error("Uknown action" + action.type);
        }
    }
}

export function TotalPriceProvider({children}) {
    const [totalPrice, dispatch] = useReducer(
        totalPriceReducer, { total: 0}
    );
    return (
        <TotalPriceContext.Provider value={{totalPrice}}>
            <TotalPriceDispatchContext.provider value={dispatch}>
                {children}
            </TotalPriceDispatchContext.provider>
        </TotalPriceContext.Provider>

    )
}

export function useTotalPrice() {
    return useContext(TotalPriceContext);
}

export function useTotalPriceDispatch() {
    return useContext(TotalPriceDispatchContext);
}