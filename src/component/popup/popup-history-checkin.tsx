'use client'
import { useEffect } from "react";
import Popup from "../popup"
import { MW } from "@/services/api";

const PopupHistoryCheckin:React.FC<{
    isOpen: boolean;
    onClose: () => void;
}> = ({isOpen, onClose}) => {

    const getHisCheckin = async () => {
        const res = await MW.getHisCheckin();
    }

    useEffect(() => {
        getHisCheckin()
    }, [])

    return (
        <Popup
            title="Lịch sử điểm danh"
            isOpen={isOpen}
            onClose={onClose}
        >
            <div className="flex flex-col justify-center items-center">
                <p>Đây là nội dung lịch sử điểm danh</p>
            </div>
        </Popup>
    )
}

export default PopupHistoryCheckin