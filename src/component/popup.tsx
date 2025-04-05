import React from 'react';

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  content?: string | string[];
  children?: React.ReactNode;
}

const Popup: React.FC<PopupProps> = ({
    isOpen,
    onClose,
    title = 'Chúc mừng!',
    content,
    children
  }) => {
    if (!isOpen) return null;
  
    const displayContent = Array.isArray(content) ? content.join('\n') : content;

    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      };
  
    return (
      <div className="fixed inset-0 bg-black/65 flex items-center justify-center z-50" onClick={handleOverlayClick}>
        <div className="relative bg-white p-6 rounded-lg w-11/12 max-w-md shadow-lg animate-fade">
          <button
            className="absolute top-2 right-2 w-6 h-6 text-gray-600 hover:text-black text-2xl leading-none"
            onClick={onClose}
          >
            ×
          </button>
          <h3 className="text-center text-lg font-semibold text-[#C60E0F] mb-4">
            {title}
          </h3>
          <div className="text-center mb-4">
            {displayContent?.split('\n').map((line, index) => (
              <p key={index} className="text-gray-700 my-1">
                {line}
              </p>
            ))}
          </div>
          {children && <div className="mt-4">{children}</div>}
        </div>
      </div>
    );
  };
  
  export default Popup;