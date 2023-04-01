
// write some action creators for the filter

import { COLORCHANGE_FILTER, STATUSCHANGE_FILTER } from "./actionTypes"


export const statusChangeFilter = (status) => {
    return {
        type: STATUSCHANGE_FILTER,
        payload: status,
    }

}

export const colorChangeFilter = (color, changeType) => {
    return {
        type: COLORCHANGE_FILTER,
        payload: {
            color,
            changeType,
        },
    }

}