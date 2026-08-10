import { Link } from "react-router-dom";
import { useState } from "react";

export default function FlyoutLink({ to, children, FlyoutContent }) {

    const [open, setOpen] = useState(false);
    const showFlyout = open && FlyoutContent;
    return (<div
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className="relative h-fit w-fit">
        <Link to={to} className="relative text-white">{children}
            <span className={`absolute -bottom-2 -left-2 -right-2 h-1 origin-left rounded-full bg-indigo-300 transition-transform duration-300 ease-in-out ${open ? "scale-x-100" : "scale-x-0"}`} />
        </Link>
        {showFlyout && (
            <div className="absolute left-1/2 top-12 mt-2 bg-white -translate-x-1/2 text-black p-4 rounded shadow-lg">
                <div className="absolute -top-8 left-0 right-0 h-8 bg-transparent" />
                <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
                <FlyoutContent />
            </div>
        )}
    </div>);
}