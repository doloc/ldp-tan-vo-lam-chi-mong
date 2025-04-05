'use client'

import { loadingState } from "@/atom/atom";
import ReactLoading from "react-loading";
import { useRecoilValue } from "recoil";

const Loading = () => {
    const loading = useRecoilValue(loadingState)
    
    return (
        loading && <div className="z-50 fixed top-0 left-0 w-full h-full opacity-50 bg-black">
            <div className="h-[86vh] flex flex-wrap content-center justify-center text-white text-xl">
                <div className="w-25 items-center justify-center flex flex-col gap-2">
                    <ReactLoading type="spinningBubbles" color="#fff" />
                    <h1>Đang tải...</h1>
                </div>
            </div>
        </div>
    )
}

export default Loading