import { FieldKey, WhyType } from '@/types/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
    step: string
    field: FieldKey | ''
    topic: string
    topicName: string
    when: number
    why: WhyType
    loading: boolean
}

const initialState: CounterState = {
    step: 'home',
    field: '',
    topic: '',
    topicName: '',
    when: 0,
    why: 'Environment',
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
        setWhy: (state, action: PayloadAction<WhyType>) => {
            state.why = action.payload
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload

        },
        setTopicName: (state, action: PayloadAction<string>) => {
            state.topicName = action.payload

        },
    }
})

export const { setStep, setField, setTopic, setWhen, setWhy, setLoading, setTopicName } = counterSlice.actions

export default counterSlice.reducer