import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
    step: string
    field: string
}

const initialState: CounterState = {
    step: 'home',
    field: ''
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setStep: (state, action: PayloadAction<string>) => {
            state.step = action.payload

        },
        setField: (state, action: PayloadAction<string>) => {
            state.field = action.payload

        },

    },
})

export const { setStep, setField } = counterSlice.actions

export default counterSlice.reducer