import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";
import { urlFor } from "@/lib/Client";
import { toast } from 'react-hot-toast'
import { useEffect } from 'react'



// Type for our state
export interface CartState {
  itemsList: any ;
  totalQty: number;
  subTotal: number
}





// Initial state
const initialState: CartState = {
 
    itemsList: [],
    totalQty: 0,
    subTotal: 1,
};


// Actual Slice
export const cartSlice = createSlice({ 
  name: "cart",
  initialState,
  reducers: {

    resetItemsList: ( state, action ) => {
      state.itemsList = []
  },
  
    //add items to cart
    addToCart: (state, action) => {
        const newItem = action.payload;
        //check if the items exist
        const existingItems = state.itemsList.find((item: any) => item.id === newItem._id);
    
        if (existingItems) {
          existingItems.quantity++
          existingItems.totalPrice = Number(existingItems.quantity) * Number(newItem.price)
        } else {

          //add new items if it doesnt exist before
          state.itemsList.push({
            name: newItem.name,
            id: newItem._id,
            price: Number(newItem.price),
            totalPrice: Number(newItem.price),
            img: urlFor(newItem.image && newItem.image[0]).url(),
            quantity: 1,
            isAdded: true
          })
          state.totalQty++;
          // toast.success(`${newItem.name} added to Cart`)
      }
     
    
    
       },
    
    
    //calculate total product amount
       subtotalPrice: (state, action) => {
        const {id, qty} = action.payload;
         const existingItems = state.itemsList.find((item: any ) => item.id === id);
     
          if (existingItems) {
          existingItems.quantity = Number(qty)
          existingItems.totalPrice = existingItems.price * Number(qty)
          
       }
    },
       
       //remove cart
      removeCart: (state, action) => {
        const id = action.payload;
        const existingItems = state.itemsList.find((item: any) => item.id === id);
        if (existingItems)
        state.itemsList = state.itemsList.filter((item: any) => item.id !== id);
        existingItems.isAdded = false
        state.totalQty--;
        if(state.totalQty < 0) state.totalQty = 0
 
       
     },
    

    // Special reducer for hydrating the state. Special case for next-redux-wrapper
    // extraReducers: {
    //   [HYDRATE]: (state, action:any) => {
    //     return {
    //       ...state,
    //       ...action.payload.cart,
    //     };
    //   },
    // },

  },
});

export const { addToCart, removeCart, subtotalPrice, resetItemsList } = cartSlice.actions;
export const selectItemsList = (state: AppState) => state.cart.itemsList;
export const selectTotalQty = (state: AppState) => state.cart.totalQty;
export const selectSubTotal = (state: AppState) => state.cart.subTotal;
 



export default cartSlice.reducer;