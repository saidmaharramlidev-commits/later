import { FieldKey } from '@/types/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
    step: string
    field: FieldKey | ''
    topic: string
}

const initialState: CounterState = {
    step: 'home',
    field: '',
    topic: ''
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setStep: (state, action: PayloadAction<string>) => {
            state.step = action.payload

        },
        setField: (state, action: PayloadAction<FieldKey>) => {
            state.field = action.payload

        },
        setTopic: (state, action: PayloadAction<string>) => {
            state.topic = action.payload

        }

    },
})

export const { setStep, setField, setTopic } = counterSlice.actions

export default counterSlice.reducer