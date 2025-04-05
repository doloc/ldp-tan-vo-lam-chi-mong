'use client'
import Popup from "../popup"

const PopupReceiveGift:React.FC<{
    isOpen: boolean;
    onClose: () => void;
    milestone: number;
}> = ({isOpen, onClose, milestone}) => {
    return (
        <Popup
            title="Nhận quà lệnh bài"
            isOpen={isOpen}
            onClose={onClose}
        >
            <div className="flex flex-col justify-center items-center">
                <p>Chúc mừng bạn đã nhận được quà mốc {milestone}</p>
                <p>Mã gift code: ABCXYZ</p>
            </div>
        </Popup>
    )
}

export default PopupReceiveGift