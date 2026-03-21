import { GiSkills } from "react-icons/gi";
import { IoIosFitness } from "react-icons/io";
import { LuBriefcaseBusiness } from "react-icons/lu";
import { GrUserWorker } from "react-icons/gr";
import { GiGrowth } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { setField, setStep } from "@/redux/counterSlice";


function FieldSelect() {

    const dispatch = useDispatch()






    return (
        <div id="mainField">
            <h1>Pick one. We’ll show how time changes it.</h1>


            <div id="fields-wrapper">
                <div className="field" onClick={() => {
                    dispatch(setStep('topic'))
                    dispatch(setField('Skills'))
                }}>
                    <span>Skills & Learning</span>
                    <GiSkills className="icon-field" />
                </div>
                <div className="field" onClick={() => {
                    dispatch(setStep('topic'))
                    dispatch(setField('Health'))
                }}>
                    <span>Health & Fitness</span>
                    <IoIosFitness className="icon-field" />
                </div>
                <div className="field" onClick={() => {
                    dispatch(setStep('topic'))
                    dispatch(setField('Money'))
                }}>
                    <span>Money & Saving</span>
                    <LuBriefcaseBusiness className="icon-field" />
                </div>
                <div className="field" onClick={() => {
                    dispatch(setStep('topic'))
                    dispatch(setField('Career'))
                }}>
                    <span>Career & Work</span>
                    <GrUserWorker className="icon-field" />
                </div>
                <div className="field" onClick={() => {
                    dispatch(setStep('topic'))
                    dispatch(setField('Growth'))
                }}>
                    <span>Personal Growth</span>
                    <GiGrowth className="icon-field" />
                </div>


            </div>

            <div className="ctaOfField" onClick={() => dispatch(setStep('home'))}>{'< Back'}</div>

        </div>
    )
}

export default FieldSelect