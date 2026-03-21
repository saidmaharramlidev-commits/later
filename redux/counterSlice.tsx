import { FieldKey } from '@/types/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
    step: string
    field: FieldKey | ''
    topic: string
    when: number
    why: string
    loading: boolean
}

const initialState: CounterState = {
    step: 'home',
    field: '',
    topic: '',
    when: 0,
    why: 'empty',
    loading: false
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

        },
        setWhen: (state, action: PayloadAction<number>) => {
            state.when = action.payload
        },
        setWhy: (state, action: PayloadAction<string>) => {
            state.why = action.payload
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload

        },
    }
})

export const { setStep, setField, setTopic, setWhen, setWhy, setLoading } = counterSlice.actions

export default counterSlice.reducer