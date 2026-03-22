'use client'






import { setStep, setWhen } from "@/redux/counterSlice"
import { RootState } from "@/redux/store"
import { useDispatch, useSelector } from "react-redux"


function WhenStart() {


    const dispatch = useDispatch()
    const { topic } = useSelector((state: RootState) => state.counter)


    return (
        <div id="mainWhen">
            <h1>When are you going to start to do this topic?</h1>

            <span>{topic}</span>

            <div id="times-wrapper">
                <div className="time" onClick={() => {
                    dispatch(setStep('whyStart'))
                    dispatch(setWhen(0))
                }}>
                    <p>Tomorrow</p>
                </div>
                <div className="time" onClick={() => {
                    dispatch(setStep('whyStart'))
                    dispatch(setWhen(1))
                }}>
                    <p>1 week later</p>
                </div>
                <div className="time" onClick={() => {
                    dispatch(setStep('whyStart'))
                    dispatch(setWhen(2))
                }}>
                    <p>1 month later</p>
                </div>
                <div className="time" onClick={() => {
                    dispatch(setStep('whyStart'))
                    dispatch(setWhen(3))
                }}>
                    <p>3 months later</p>
                </div>
                <div className="time" onClick={() => {
                    dispatch(setStep('whyStart'))
                    dispatch(setWhen(4))
                }}>
                    <p>After New year</p>
                </div>
            </div>


            <div className="ctaOfField" onClick={() => dispatch(setStep('topic'))}>{'< Back'}</div>


        </div>
    )
}

export default WhenStart