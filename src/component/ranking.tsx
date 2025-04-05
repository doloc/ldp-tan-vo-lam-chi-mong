const Ranking = () => {
    return (
        <div className="flex flex-col items-center w-full max-w-2xl bg-[url('/images/bg-ranking.jpg')] aspect-[640/1360] bg-no-repeat bg-cover bg-center overflow-hidden">
            <img src="/images/title-ranking.png" alt="" className="-mt-[1%] w-full" />

            <div className="relative w-full -top-[2%] flex flex-col items-center">
                <div className="w-[85%] flex justify-between">
                    <button className="w-[50%] bg-[url('/images/btn-rules-3.png')] aspect-[143/51] bg-no-repeat bg-cover bg-center overflow-hidden">
                    </button>
                    <button className="w-[50%] bg-[url('/images/btn-reward.png')] aspect-[143/51] bg-no-repeat bg-cover bg-center overflow-hidden">
                    </button>
                </div>

                <div className="-mt-1%] flex justify-center items-center w-full bg-[url('/images/text-bg.png')] aspect-[559/41] bg-no-repeat bg-cover bg-center">
                    <p className="text-base text-[#FCF6C8]">Xin chào, bạn đang có XXX lệnh bài</p>
                </div>

                <img src="/images/text-hot-reward.png" alt="" className="w-[35%]" />
                <div className="-mt-[2%] w-[75%] grid grid-cols-3">
                    <img src="/images/avatar-doccocaubai.png" alt="" />
                    <img src="/images/avatar-ngami.png" alt="" />
                    <img src="/images/avatar-magiaochu.png" alt="" />
                </div>

                <div className="z-10 w-[65%] grid grid-cols-7">
                    <div className="mt-[25%] col-span-2 bg-[url('/images/bg-rank-2.png')] aspect-[136/217] bg-no-repeat bg-cover bg-center">
                    </div>
                    <div className="col-span-3 bg-[url('/images/bg-rank-1.png')] aspect-[186/293] bg-no-repeat bg-cover bg-center">
                    </div>
                    <div className="mt-[25%] col-span-2 bg-[url('/images/bg-rank-3.png')] aspect-[136/217] bg-no-repeat bg-cover bg-center">
                    </div>
                </div>

                <div className="-mt-[6%] w-full flex justify-center bg-[url('/images/bg-ranking-shape.png')] aspect-[640/620] bg-no-repeat bg-cover bg-center">
                    <div className="mt-[13%] -ml-[2%] w-[80%] bg-[#F8F0D8] max-h-[68vw]">
                        <div className="my-[1%] grid grid-cols-3 text-base text-[#9B420B] font-semibold">
                            <p className="text-center">HẠNG</p>
                            <p className="text-center">NHÂN VẬT</p>
                            <p className="text-center">LỆNH BÀI</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ranking