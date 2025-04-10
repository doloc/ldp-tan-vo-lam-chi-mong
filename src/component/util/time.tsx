export const formatTimestamp = (timestamp: number | string): string => {
    const date = new Date(typeof timestamp === 'string' ? parseInt(timestamp) : timestamp);
    
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // +1 vì getMonth() bắt đầu từ 0
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
  
    return `${year}.${month}.${day} - ${hours}:${minutes}`;
};