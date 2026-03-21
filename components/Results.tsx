'use client'


import { setStep } from "@/redux/counterSlice"
import { RootState } from "@/redux/store"
import { useDispatch, useSelector } from "react-redux"







function Results() {


    const dispatch = useDispatch()
    const { field, topic } = useSelector((state: RootState) => state.counter)






    return (
        <div id="mainResults">
            <h1 id="headerResults">Results</h1>


            <div id="topDiv-results">
                <div className="advice-card">
                    <h2 style={{ color: 'silver' }}>Field</h2>
                    <p>{field}</p>
                </div>
                <div className="advice-card">
                    <h2 style={{ color: 'silver' }}>Topic</h2>
                    <p>{topic}</p>
                </div>
                <div className="advice-card">
                    <h2 style={{ color: 'silver' }}>Advice</h2>
                    <p>You dont need to be perfect</p>
                </div>
            </div>


            <div id="statistics-wrapper">
                <h2 className="labelOfStatistics" style={{ color: 'lightgreen' }}>If you start now</h2>
                <div className="statistic-div"></div>
                <h2 className="labelOfStatistics" style={{ color: 'red' }}>If you wait</h2>
                <div className="statistic-div"></div>

            </div>

            <div className="ctaOfField" style={{ marginBottom: "50px" }} onClick={() => dispatch(setStep('home'))}>{'< Home'}</div>

        </div>
    )
}

export default Results