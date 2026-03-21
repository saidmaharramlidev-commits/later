import Image from "next/image"
import pic from "@/public/loadingImg.png"

function LoadingScreen() {
    return (
        <div id="mainLoading">
            <Image className="rotate" id="loadingPic" alt="Loading" src={pic} />

            <p style={{ color: "white" }}>Calculating...</p>

        </div>
    )
}

export default LoadingScreen