'use client'

import { setLoading, setStep, setWhy } from "@/redux/counterSlice"
import { RootState } from "@/redux/store"
import { useDispatch, useSelector } from "react-redux"



function Why() {

    const { when } = useSelector((state: RootState) => state.counter)
    const dispatch = useDispatch()

    let timeText = ''

    if (when == 1) {
        timeText = 'Tomorrow'

    } else if (when == 2) {
        timeText = "1 week later"
    } else if (when == 3) {
        timeText = "1 month later"
    }
    else if (when == 4) {
        timeText = "3 months later"
    }
    else {
        timeText = "After New year"
    }




    return (
        <div id="mainWhy">
            <h1>One more step.Why don't you start now?</h1>

            <span>{timeText}</span>

            <div id="excuses-wrapper">
                <div className="excuse" onClick={() => {
                    (dispatch(setStep('loading')))
                    dispatch(setLoading(true))
                    dispatch(setWhy('Environment'))

                    setTimeout(() => {
                        dispatch(setLoading(false))
                        dispatch(setStep('results'))

                    }, 5000)
                }}><p>Environment doesn't let it happen</p></div>
                <div className="excuse" onClick={() => {
                    (dispatch(setStep('loading')))
                    dispatch(setLoading(true))
                    dispatch(setWhy('Time'))

                    setTimeout(() => {
                        dispatch(setLoading(false))
                        dispatch(setStep('results'))

                    }, 5000)
                }}><p>I don’t have enough time</p></div>
                <div className="excuse" onClick={() => {
                    (dispatch(setStep('loading')))
                    dispatch(setLoading(true))
                    dispatch(setWhy('Where'))

                    setTimeout(() => {
                        dispatch(setLoading(false))
                        dispatch(setStep('results'))

                    }, 5000)
                }}><p>I don’t know where to start</p></div>
                <div className="excuse" onClick={() => {
                    (dispatch(setStep('loading')))
                    dispatch(setLoading(true))
                    dispatch(setWhy('Money'))
                    setTimeout(() => {
                        dispatch(setLoading(false))
                        dispatch(setStep('results'))

                    }, 5000)
                }}><p>I don't have enough money</p></div>
                <div className="excuse" onClick={() => {
                    (dispatch(setStep('loading')))
                    dispatch(setLoading(true))
                    dispatch(setWhy('Delay'))
                    setTimeout(() => {
                        dispatch(setLoading(false))
                        dispatch(setStep('results'))

                    }, 5000)
                }}><p>I delay it always</p></div>

            </div>

            <div className="ctaOfField" onClick={() => dispatch(setStep('when'))}>{'< Back'}</div>


        </div>
    )
}

export default Why





