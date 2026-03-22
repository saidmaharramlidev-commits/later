'use client'


import { setStep } from "@/redux/counterSlice"
import { RootState } from "@/redux/store"
import { excuseMotivation } from "./excuses"
import { useDispatch, useSelector } from "react-redux"
import { topicMilestones } from "./milestones"
import { FaArrowRight } from "react-icons/fa";






function Results() {



    const dispatch = useDispatch()
    const { field, topicName, topic, why, when } = useSelector((state: RootState) => state.counter)

    const arrayOfExcuses = excuseMotivation[why]

    const randomExcuse = arrayOfExcuses[Math.floor(Math.random() * arrayOfExcuses.length)]

    const timelinePoints = [
        "2 days later",
        "1 Week",
        "1 Month",
        "3 Months",
        "1 Year"
    ]


    const fromWhen = timelinePoints[when]

    const achievements = topic ? topicMilestones[topic as keyof typeof topicMilestones] ?? [] : []








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
                    <p>{topicName}</p>
                </div>
                <div className="advice-card">
                    <h2 style={{ color: 'silver' }}>Advice</h2>
                    <p>{randomExcuse}</p>
                </div>
            </div>


            <div id="statistics-wrapper">
                <h2 className="labelOfStatistics" style={{ color: 'rgba(12, 171, 179, 0.6)' }}>If you start now</h2>
                <div className="statistic-div">
                    <div className="time-wrapper-results">
                        <div className="time-endpoints border-right">Now</div>
                        <div className="time-endpoints border-right">1 Week</div>
                        <div className="time-endpoints border-right">1 Month</div>
                        <div className="time-endpoints border-right">3 Months</div>
                        <div className="time-endpoints">1 Year</div>
                    </div>

                    <div className="achivements-wrapper">
                        {achievements.map((element, index) => {
                            if (index < 4) {
                                return (
                                    <div key={index} className="achivement">
                                        <div className="achivement-circle">{element}</div>
                                        <span className="arrow"><FaArrowRight /></span>
                                    </div>
                                )
                            } else {
                                return (
                                    <div key={index} className="achivement">
                                        <div className="last-circle">{element}</div>
                                    </div>

                                )
                            }

                        })}
                    </div>
                </div>
                <h2 className="labelOfStatistics" style={{ color: 'red' }}>If you wait</h2>
                <div className="statistic-div">
                    <div className="time-wrapper-results">
                        {timelinePoints.map((time, index) => {
                            const isBeforeStart = index < when;

                            if (index == 0) {
                                return (
                                    <div
                                        key={index}
                                        className={`time-endpoints 
            ${index !== timelinePoints.length - 1 ? 'border-right' : ''} 
            ${isBeforeStart ? 'wastedfirst' : ''}
          `}
                                    >
                                        {time}
                                    </div>

                                )
                            }

                            return (
                                <div
                                    key={index}
                                    className={`time-endpoints 
            ${index !== timelinePoints.length - 1 ? 'border-right' : ''} 
            ${isBeforeStart ? 'wasted' : ''}
          `}
                                >
                                    {time}
                                </div>
                            );
                        })}
                    </div>

                    <div className="achivements-wrapper">
                        {timelinePoints.map((_, index) => {
                            if (index < when) {

                                if (index == 0) {
                                    return (
                                        <div key={index} className="achivement wastedEndpointfirst">
                                            <h2>Wasted</h2>
                                        </div>

                                    )
                                } return (
                                    <div key={index} className="achivement wastedEndpoint">
                                        <h2>Wasted</h2>
                                    </div>
                                );
                            } else {


                                // After waiting time
                                const achievementIndex = index - when;
                                const element = achievements[achievementIndex];

                                if (!element) return null;

                                const isLast = achievementIndex === achievements.length - 1;

                                return (
                                    <div key={index} className="achivement">
                                        <div className={`achivement-circle ${isLast ? 'last' : ''}`}>
                                            {element}
                                        </div>
                                        {!isLast && index !== timelinePoints.length - 1 && (
                                            <span className="arrow">
                                                <FaArrowRight />
                                            </span>
                                        )}
                                    </div>
                                );
                            }
                        })}
                    </div>
                </div>
            </div>

            <div className="ctaOfField" style={{ marginBottom: "50px" }} onClick={() => dispatch(setStep('home'))}>{'< Home'}</div>

        </div>
    )
}

export default Results