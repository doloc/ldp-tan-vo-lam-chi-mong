'use client'
import Image from "next/image";
import { useState } from "react";
import Popup from "./popup";

const ExchangeGift = () => {
    const [boxes, setBoxes] = useState<string[]>(Array(12).fill('/images/bg-box-shape.png'));
    const [popupOpen, setPopupOpen] = useState(false);
    const [popupContent, setPopupContent] = useState<string | string[]>('');
    const [isRolling, setIsRolling] = useState(false);

    const LIGHT_DURATION = 800; // Duration của box-light.gif
    const OPEN_DURATION = 1100; // Duration của box-open.gif

    const rewards = [
        "100 Xu",
        "Vũ khí hiếm",
        "Skin đặc biệt",
        "500 Kim cương",
        "Hộp quà bí ẩn"
    ];

    const rollOne = () => {
        if (isRolling) return;
        setIsRolling(true);

        const randomIndex = Math.floor(Math.random() * 12);
        const newBoxes = [...boxes];
        
        // Reset boxes
        newBoxes.fill('/images/bg-box-shape.png');
        setBoxes([...newBoxes]);
        
        // Hiệu ứng sáng
        newBoxes[randomIndex] = '/images/box-light.gif';
        setBoxes([...newBoxes]);
        
        setTimeout(() => {
          // Hiệu ứng mở hộp
          newBoxes[randomIndex] = '/images/box-open.gif';
          setBoxes([...newBoxes]);
          
          // Đợi thêm thời gian để hiệu ứng mở hộp hoàn tất
          setTimeout(() => {
            const reward = rewards[Math.floor(Math.random() * rewards.length)];
            setPopupContent(reward);
            setPopupOpen(true);
            
            // Reset box sau khi popup hiển thị
            newBoxes[randomIndex] = '/images/bg-box-shape.png';
            setBoxes([...newBoxes]);
            setIsRolling(false);
          }, OPEN_DURATION); // Tăng thời gian chờ để khớp với duration của box-open.gif
        }, LIGHT_DURATION);
      };

      const rollTen = () => {
        if (isRolling) return;
        setIsRolling(true);

        const randomIndexes: number[] = [];
        while(randomIndexes.length < 10) {
          const random = Math.floor(Math.random() * 12);
          if(!randomIndexes.includes(random)) randomIndexes.push(random);
        }
        
        const newBoxes = [...boxes];
        newBoxes.fill('/images/bg-box-shape.png');
        setBoxes([...newBoxes]);
        
        let delay = 0;
        const rewardsReceived: string[] = [];
        
        randomIndexes.forEach((index, i) => {
          setTimeout(() => {
            // Hiệu ứng sáng
            newBoxes[index] = '/images/box-light.gif';
            setBoxes([...newBoxes]);
            
            setTimeout(() => {
              // Hiệu ứng mở hộp
              newBoxes[index] = '/images/box-open.gif';
              setBoxes([...newBoxes]);
              
              const reward = rewards[Math.floor(Math.random() * rewards.length)];
              rewardsReceived.push(reward);
              
              // Chỉ hiển thị popup sau khi tất cả hiệu ứng mở hoàn tất
              if(i === 9) {
                setTimeout(() => {
                  setPopupContent(rewardsReceived);
                  setPopupOpen(true);
                  
                  randomIndexes.forEach(idx => {
                    newBoxes[idx] = '/images/bg-box-shape.png';
                  });
                  setBoxes([...newBoxes]);
                  setIsRolling(false);
                }, OPEN_DURATION); // Đợi hiệu ứng cuối cùng hoàn tất
              }
            }, LIGHT_DURATION);
          }, delay);
          delay += 300;
        });
    };

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
                    {/* {Array.from({ length: 12 }, (_, index) => (
                        <img key={index} src="/images/bg-box-shape.png" alt="" />
                    ))} */}
                    {boxes.map((src, index) => (
                        <Image key={index} src={src} alt={"box"} width={100} height={100} unoptimized />
                    ))}
                </div>
            </div>

            <div className="w-[85%] flex justify-between">
                <button className="w-[50%] bg-[url('/images/btn-roll-1.png')] aspect-[143/51] bg-no-repeat bg-cover bg-center overflow-hidden" onClick={rollOne}>
                </button>
                <button className="w-[50%] bg-[url('/images/btn-roll-10.png')] aspect-[143/51] bg-no-repeat bg-cover bg-center overflow-hidden" onClick={rollTen}>
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

            <Popup
                isOpen={popupOpen}
                onClose={() => setPopupOpen(false)}
                content={popupContent}
            />
        </div>
    )
}

export default ExchangeGift