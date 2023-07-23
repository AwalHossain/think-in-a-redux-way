import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../../types/globalTypes";



interface Icart {
    products: IProduct[];
    total: number;
}


const initialState: Icart = {
    products: [],
    total: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct(state, action: PayloadAction<IProduct>) {

            const existingProduct = state.products.find(product => product._id === action.payload._id);
            if (existingProduct) {
                existingProduct.quantity! += 1;
            }else
            {
                state.products.push({...action.payload, quantity: 1})
            }

            state.total += action.payload.price;

        },
        removeOne(state, action: PayloadAction<IProduct>) {
            const existingProduct = state.products.find(product => product._id === action.payload._id);
            if (existingProduct && existingProduct.quantity! > 1) {
                existingProduct.quantity! -= 1;
               
            }else{
                state.products = state.products.filter(product => product._id !== action.payload._id);
            }
            state.total -= action.payload.price;
        }
        ,
        removFromCart(state, action: PayloadAction<IProduct>) {

            const filteredProducts = state.products.filter(product => product._id !== action.payload._id);
            state.products = filteredProducts;

            state.total -= action.payload.price * action.payload.quantity!;
        },

    }

})


export const { addProduct, removeOne, removFromCart } = cartSlice.actions;
export default cartSlice.reducer;