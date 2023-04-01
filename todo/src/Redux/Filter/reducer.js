import { COLORCHANGE_FILTER, STATUSCHANGE_FILTER } from "./actionTypes";
import intialState from "./initialState";



export const filterReducer = (state= intialState, action)=>{
    switch (action.type) {
        case STATUSCHANGE_FILTER:
            return {
                ...state,
                status: action.payload
            }
        
        case COLORCHANGE_FILTER:
            const {color, changeType}  = action.payload
            
            switch (changeType) {
                case "added":
                    return{
                        ...state,
                        colors: [...state.colors, color],
                    }
                    
                case "removed":
                    return{
                        ...state,
                        colors: state.colors.filter((existingColor)=> existingColor !== color)
                    }
                default:
                    return state;
            }

        default:
            return state;
    }
}