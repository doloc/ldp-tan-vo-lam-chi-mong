'use client'
import { useState } from "react";
import PopupHistoryCheckin from "./popup/popup-history-checkin";
import PopupRulesCheckin from "./popup/popup-rules-checkin";
import PopupReceiveGift from "./popup/popup-receive-gift";
import { AnimatePresence } from 'framer-motion';

const Attendance = () => {
    const [popupHisCheckinOpen, setPopupHisCheckinOpen] = useState(false);
    const [popupRulesCheckinOpen, setPopupRulesCheckinOpen] = useState(false);
    const [popupReceiveGiftOpen, setPopupReceiveGiftOpen] = useState(false);
    const [milestone, setMileStone] = useState(0);
    const numCount = 10;

    const receiveGift = (milestone: number) => {
        if (numCount <= milestone) return
        setMileStone(milestone)
        setPopupReceiveGiftOpen(true)
    }

    return (
        <div className="flex flex-col items-center w-full max-w-2xl bg-[url('/images/bg-attendance.jpg')] aspect-[640/603] bg-no-repeat bg-cover bg-center overflow-hidden">
            <img src="/images/title-attendance.png" alt="" className="w-full" />
            <div className="w-full flex justify-center items-center">
                <div className="relative w-[95%] bg-[url('/images/attendance-shape.png')] aspect-[607/429] bg-no-repeat bg-cover bg-center flex flex-col items-center overflow-hidden">
                    <div className="mt-[3%] flex justify-center items-center w-full bg-[url('/images/text-bg.png')] aspect-[559/41] bg-no-repeat bg-cover bg-center">
                        <p className="text-base text-[#FCF6C8]">Xin chào, bạn đang có XXX lệnh bài</p>
                    </div>
                    {/* Điểm danh */}
                    <div className="absolute w-[43%] top-[20%] left-[4%]">
                        <div className="grid grid-cols-4 grid-rows-3 gap-[0.8vw]">
                            {Array.from({ length: 12 }, (_, index) => (
                                <div
                                    key={index}
                                    className={`flex items-center justify-center text-base font-bold w-full bg-[url('/images/bg-number.png')] aspect-[12/13] bg-no-repeat bg-cover bg-center overflow-hidden ${index < numCount ? '' : 'grayscale'}`}
                                >
                                    <span className="bg-gradient-to-b from-[#B43616] to-[#CB130B] inline-block text-transparent bg-clip-text tracking-wide" style={{fontFamily: 'SVN Desire'}}>{index + 1}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="absolute w-[45%] top-[72%] left-[4%]">
                        <div className="grid grid-cols-2 grid-rows-2 gap-[0.5vw] w-full">
                            <button className="flex justify-center items-center bg-[url('/images/btn-history.png')] aspect-[3/1] bg-no-repeat bg-cover bg-center overflow-hidden" onClick={() => setPopupHisCheckinOpen(true)}>
                            </button>
                            <button className="flex justify-center items-center bg-[url('/images/btn-rules.png')] aspect-[3/1] bg-no-repeat bg-cover bg-center overflow-hidden" onClick={() => setPopupRulesCheckinOpen(true)}>
                            </button>
                            <div className="col-span-2 flex justify-center items-center">
                                <button className="w-[49%] flex justify-center items-center bg-[url('/images/btn-attendance.png')] aspect-[3/1] bg-no-repeat bg-cover bg-center overflow-hidden">
                                </button>
                            </div>
                            
                        </div>
                    </div>

                    <div className="absolute w-[47%] top-[16%] right-[4%] ">
                        <div className="grid grid-cols-2 grid-rows-2 gap-[0.8vw] w-full text-sm text-[#FEF4B2]">
                            <div className="relative flex justify-center bg-[url('/images/bg-milstone.png')] aspect-[138/167] bg-no-repeat bg-cover bg-center overflow-hidden">
                                <span className="absolute top-[18%] left-[20%]">Mốc 4</span>
                                <button className={`mt-[95%] h-[17%] bg-[url('/images/btn-receive.png')] aspect-[106/29] bg-no-repeat bg-cover bg-center ${4 <= numCount ? '' : 'grayscale'}`} onClick={() => receiveGift(4)}></button>
                            </div>
                            <div className="relative flex justify-center bg-[url('/images/bg-milstone.png')] aspect-[138/167] bg-no-repeat bg-cover bg-center overflow-hidden">
                                <span className="absolute top-[18%] left-[20%]">Mốc 8</span>
                                <button className={`mt-[95%] h-[17%] bg-[url('/images/btn-receive.png')] aspect-[106/29] bg-no-repeat bg-cover bg-center ${8 <= numCount ? '' : 'grayscale'}`} onClick={() => receiveGift(8)}></button>
                            </div>
                            <div className="col-span-2 flex justify-center items-center">
                                <div className="relative flex justify-center w-[47%] bg-[url('/images/bg-milstone.png')] aspect-[138/167] bg-no-repeat bg-cover bg-center overflow-hidden">
                                    <span className="absolute top-[18%] left-[20%]">Mốc 12</span>
                                    <button className={`mt-[95%] h-[17%] bg-[url('/images/btn-receive.png')] aspect-[106/29] bg-no-repeat bg-cover bg-center ${12 <= numCount ? '' : 'grayscale'}`} onClick={() => receiveGift(12)}></button>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {popupHisCheckinOpen && (
                <PopupHistoryCheckin
                    isOpen={popupHisCheckinOpen}
                    onClose={() => setPopupHisCheckinOpen(false)}
                />)}
            </AnimatePresence>

            <AnimatePresence>
                {popupRulesCheckinOpen && (
                <PopupRulesCheckin
                    isOpen={popupRulesCheckinOpen}
                    onClose={() => setPopupRulesCheckinOpen(false)}
                />)}
            </AnimatePresence>

            <AnimatePresence>
                {popupReceiveGiftOpen && (
                <PopupReceiveGift 
                    isOpen={popupReceiveGiftOpen}
                    onClose={() => setPopupReceiveGiftOpen(false)}
                    milestone={milestone}
                />)}
            </AnimatePresence>
        </div>
    )
}

export default Attendance