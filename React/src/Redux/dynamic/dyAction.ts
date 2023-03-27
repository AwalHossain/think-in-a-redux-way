// create action creators

import { DDECREMENT, DINCREMENT } from "./dyActionTypes";

export const Dincrement = (value: number) => {
  return {
    type: DINCREMENT,
    payload: value,
  };
};
export const Ddecrement = (value: number) => {
  return {
    type: DDECREMENT,
    payload: value,
  };
};
