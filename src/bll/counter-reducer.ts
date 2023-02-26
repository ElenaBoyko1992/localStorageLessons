import {AppThunkDispatch} from "./store";

const initialState = {
    value: 0
}

type InitialStateType = typeof initialState

export const counterReduser = (state: InitialStateType = initialState, action: CounterActionsType): InitialStateType => {
    switch (action.type) {
        case "INC-VALUE":
            return {
                ...state, value: state.value + 1
            }
        case "SET-VALUE-FROM-LOCAL-STORAGE":
            return {
                ...state, value: action.value
            }

        default:
            return state
    }
}

export const incValueAC = () => ({type: 'INC-VALUE'} as const)
export const setValuesFromLSAC = (value: number) => ({type: 'SET-VALUE-FROM-LOCAL-STORAGE', value} as const)

//thunks


export type CounterActionsType =
    | ReturnType<typeof incValueAC>
    | ReturnType<typeof setValuesFromLSAC>