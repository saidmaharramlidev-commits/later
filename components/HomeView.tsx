'use client'



import Image from "next/image"
import Logo from '@/public/laterLogo.png'
import { setStep } from "@/redux/counterSlice"
import { useDispatch } from "react-redux"

function HomeView() {

    const dispatch = useDispatch()


    return (
        <div id="mainHomeView">
            <div id="logo-wrapper">
                <Image className="fadeUp" id="logoOfHomeView" src={Logo} alt="Logo" />

            </div>

            <p id="homeText" className="fadeUp">Starting later doesn’t make it impossible.
                It just moves everything further away.</p>


            <div id="homeView-cta" className="center fadeUp" onClick={() => dispatch(setStep('field'))}>
                Find out the cost

            </div>


        </div>
    )
}

export default HomeView