import { DDECREMENT, DINCREMENT } from "./dyActionTypes";

const initialState = {
  value: 0,
};

export const dyCounterReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case DINCREMENT:
      return {
        ...state,
        value: state.value + action.payload,
      };
    case DDECREMENT:
      return {
        ...state,
        value: state.value - action.payload,
      };

    default:
      return state;
  }
};
