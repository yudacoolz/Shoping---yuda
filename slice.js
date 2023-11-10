import toolkit from "@reduxjs/toolkit";

const { configureStore, createSlice } = toolkit;


//slice = gabungan reducer dan action, sehingga ga perlu dipisah 

const cartSlice = createSlice({
    //bikin nama state dulu
    name: "cart",
    //bikin nilai state awal
    initialState: [{id:1, qty: 20}],
    //langsung bikin action disini sama handler si reducernya
    reducers : {
        addToCart(state, action) {
            state.push(action.payload);
        }
    }
})


const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
    },
});
console.log("oncreate store : ", store.getState());

store.subscribe(() => {
    console.log("STORE CHANGE: ", store.getState());
})

store.dispatch(cartSlice.actions.addToCart({ id: 2, qty: 30}));
store.dispatch(cartSlice.actions.addToCart({ id: 3, qty: 40}));
