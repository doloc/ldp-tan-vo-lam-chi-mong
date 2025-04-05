const ExchangeGift = () => {
    return (
        <div className="flex flex-col items-center w-full max-w-2xl bg-[url('/images/bg-exchange-gift.jpg')] aspect-[640/1357] bg-no-repeat bg-cover bg-center overflow-hidden">
            <img src="/images/title-exchange-gift.png" alt="" className="w-full" />
            <div className="w-[80%] flex justify-between">
                <button className="w-[29%] bg-[url('/images/btn-rules-2.png')] aspect-[3/1] bg-no-repeat bg-cover bg-center overflow-hidden">
                </button>
                <button className="w-[29%] bg-[url('/images/btn-ticket.png')] aspect-[3/1] bg-no-repeat bg-cover bg-center overflow-hidden">
                </button>
                <button className="w-[29%] bg-[url('/images/btn-history-2.png')] aspect-[3/1] bg-no-repeat bg-cover bg-center overflow-hidden">
                </button>
            </div>
            <div className="flex justify-center items-center mt-[1%] w-full bg-[url('/images/text-bg.png')] aspect-[559/41] bg-no-repeat bg-cover bg-center">
                <span className="text-base text-[#FCF6D0]">Xin chào, bạn đang có XXX lượt lật thẻ</span>
            </div>

            <div className="relative mt-[1%] w-[95%]">
                <div className="grid grid-cols-4 grid-rows-3 gap-[1vw]">
                    {Array.from({ length: 12 }, (_, index) => (
                        <img key={index} src="/images/bg-box-shape.png" alt="" />
                    ))}
                </div>
            </div>

            <div className="w-[85%] flex justify-between">
                <button className="w-[50%] bg-[url('/images/btn-roll-1.png')] aspect-[143/51] bg-no-repeat bg-cover bg-center overflow-hidden">
                </button>
                <button className="w-[50%] bg-[url('/images/btn-roll-10.png')] aspect-[143/51] bg-no-repeat bg-cover bg-center overflow-hidden">
                </button>
            </div>

            <img src="/images/text-exchange-gift.png" alt="" className="w-[50%]" />
            <div className="flex justify-center items-center mt-[1%] w-full bg-[url('/images/text-bg.png')] aspect-[559/41] bg-no-repeat bg-cover bg-center">
                <p className="text-base text-[#FCF6CD]">Xin chào, bạn đang có XXX lệnh bài</p>
            </div>
            <div className="mt-[1%] w-[85%] grid grid-cols-3 text-[#C32311]">
                <div className="relative flex flex-col items-center bg-[url('/images/bg-gift-pack-1.png')] aspect-[183/397] bg-no-repeat bg-cover bg-center">
                    <p className="mt-[25%] text-sm font-semibold">Tên Gói Quà</p>
                    <p className="mt-[72%] text-sm font-semibold">100 lệnh bài</p>
                    <button className="mt-[3%] w-[70%] bg-[url('/images/btn-exchange.png')] aspect-[122/33] bg-no-repeat bg-cover bg-center overflow-hidden">
                    </button>
                </div>
                <div className="relative flex flex-col items-center bg-[url('/images/bg-gift-pack-2.png')] aspect-[183/397] bg-no-repeat bg-cover bg-center">
                    <p className="mt-[25%] text-sm font-semibold">Tên Gói Quà</p>
                    <p className="mt-[72%] text-sm font-semibold">100 lệnh bài</p>
                    <button className="mt-[3%] w-[70%] bg-[url('/images/btn-exchange.png')] aspect-[122/33] bg-no-repeat bg-cover bg-center overflow-hidden">
                    </button>
                </div>
                <div className="relative flex flex-col items-center bg-[url('/images/bg-gift-pack-3.png')] aspect-[183/397] bg-no-repeat bg-cover bg-center">
                    <p className="mt-[25%] text-sm font-semibold">Tên Gói Quà</p>
                    <p className="mt-[72%] text-sm font-semibold">100 lệnh bài</p>
                    <button className="mt-[3%] w-[70%] bg-[url('/images/btn-exchange.png')] aspect-[122/33] bg-no-repeat bg-cover bg-center overflow-hidden">
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ExchangeGift