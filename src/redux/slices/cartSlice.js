import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice ({
    name: "cart",
    initialState: {
        data: 
            JSON.parse(localStorage.getItem("cart")) || [],
        
    },
    reducers: {
        addToCart: (state, action) => {
            // cek dulu jika ada yang sama datanya, dlm kasus ini jika id nya sama di product
            // jadi kita cari di dalam state cart ini ada data yang data id nya itu sama dengan payload yg dikirim
            const itemInCart = state.data.find((item) => item.id === action.payload.id);
            if(itemInCart){
                itemInCart.qty++;
            } else {
                state.data.push(action.payload);
            }
        },
    },
});


// akan akses ke fungsi dari addtocart nya sebagai action
export const { addToCart } = cartSlice.actions;
//export reducer
export default cartSlice.reducer;