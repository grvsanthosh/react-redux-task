import { createSlice } from '@reduxjs/toolkit'
import { HandleTotalPrice} from "../Utils/HandleTotalPrice"
export const priceSlice = createSlice(
    {
        name: 'price',
        initialState: {
            itemCount: 0,
            priceCount: 0
        },
        reducers: {
            getItem: (state,action)=>{
                let itemVal = 0;                
                for (let i = 0; i < action.payload.length; i++) {
                itemVal += action.payload[i].count;
                }
                state.itemCount = itemVal;
                
            },
            getPrice: (state,action)=>{
                    let priceVal = [];
                    for (let i = 0; i < action.payload.length; i++) {
                      priceVal.push(action.payload[i].price * action.payload[i].count);
                    }
                   state.priceCount =  HandleTotalPrice(priceVal);
                

            },

           
        }
    }
)

export const {getItem, getPrice} = priceSlice.actions;
export default priceSlice.reducer;