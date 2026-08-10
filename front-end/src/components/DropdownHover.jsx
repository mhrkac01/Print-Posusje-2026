import { useState } from "react";

const DropdownHover = ({ children, flyoutContent }) => {
    const [isOpen, setIsOpen] = useState(false);
    let timeoutId; // This stores the timer

    const handleMouseEnter = () => {
        clearTimeout(timeoutId); // Cancel any pending close timers
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        // Wait 150ms before closing. If you enter the dropdown during this time, it stays open.
        timeoutId = setTimeout(() => setIsOpen(false), 150);
    };

    return (
        <div
            className="relative inline-block"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* The "Artikli" text - not clickable */}
            <span className="cursor-default hover:text-gray-300 transition-colors">
                {children}
            </span>

            {/* Dropdown Menu */}
            {isOpen && (
                <div
                    className="absolute left-1/2 -translate-x-1/2 mt-2 w-48 bg-white text-gray-800 shadow-lg rounded-md py-2 z-50"
                    onMouseEnter={() => clearTimeout(timeoutId)}
                    onMouseLeave={handleMouseLeave}
                >
                    {/* Arrow pointing up */}
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rotate-45"></div>

                    {flyoutContent}
                </div>
            )}
        </div>
    );
};

export default DropdownHover;