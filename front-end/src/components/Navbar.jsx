// import { Link } from "react-router-dom";
// import FlyoutLink from "./FlyoutLink";

// const bars = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
//     <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
// </svg>


// const Divider = () => <div className="w-px h-6 bg-gray-400 mx-4" />;

// const Icons = {
//     Cart: () => (
//         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
//             <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
//         </svg>
//     ),
//     Printer: () => (
//         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
//             <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5Zm-3 0h.008v.008H15V10.5Z" />
//         </svg>
//     ),
// };

// const navLinks = [
//     {
//         id: "home",
//         to: "/",
//         label: "Početna",
//     },
//     {
//         id: "products",
//         to: "#",
//         label: "Artikli",
//         flyoutContent: () => (
//             <div className="w-64 p-4 space-y-1">
//                 <Link to="/souvenirs" className="block px-4 py-2 rounded hover:bg-gray-100 transition-colors">
//                     Suveniri Posušja
//                 </Link>
//                 <Link to="/mug" className="block px-4 py-2 rounded hover:bg-gray-100 transition-colors">
//                     Šalice
//                 </Link>
//                 <Link to="/magnets" className="block px-4 py-2 rounded hover:bg-gray-100 transition-colors">
//                     Magneti
//                 </Link>
//                 <Link to="/printed" className="block px-4 py-2 rounded hover:bg-gray-100 transition-colors">
//                     Tiskanice
//                 </Link>
//                 <Link to="/keyring" className="block px-4 py-2 rounded hover:bg-gray-100 transition-colors">
//                     Privjesci
//                 </Link>
//                 <Link to="/ncr" className="block px-4 py-2 rounded hover:bg-gray-100 transition-colors">
//                     Blokovska roba
//                 </Link>
//                 <Link to="/stamp" className="block px-4 py-2 rounded hover:bg-gray-100 transition-colors">
//                     Pečati
//                 </Link>
//                 <Link to="/other" className="block px-4 py-2 rounded hover:bg-gray-100 transition-colors">
//                     Ostalo
//                 </Link>
//             </div>
//         ),
//     },
//     {
//         id: "about",
//         to: "/about",
//         label: "O nama",
//     },
//     {
//         id: "contact",
//         to: "/contact",
//         label: "Kontakt",
//     },
//     // Uncomment when needed:
//     // {
//     //   id: "cart",
//     //   to: "/cart",
//     //   label: (
//     //     <span className="inline-flex items-center gap-2">
//     //       Košarica <Icons.Cart />
//     //     </span>
//     //   ),
//     //   flyoutContent: () => <div className="w-96 p-6">Košarica</div>,
//     // },
// ];

// // ---------- Component ----------
// const Navbar = () => {
//     return (
//         <nav className="flex items-center justify-between bg-gradient-to-r from-gray-900 to-gray-700 text-white p-5 sticky top-0 z-50">
//             {/* Left: Logo */}
//             <div className="ml-20">
//                 <Icons.Printer />
//             </div>

//             {/* Center: Navigation Links */}
//             <ul className="flex items-center flex-1 mx-10">
//                 {navLinks.map((item, index) => {
//                     const { id, to, label, flyoutContent } = item;
//                     const isLast = index === navLinks.length - 1;
//                     const LinkComponent = flyoutContent ? FlyoutLink : Link;

//                     return (
//                         <div key={id} className="flex items-center">
//                             <li>
//                                 <LinkComponent to={to} FlyoutContent={flyoutContent}>
//                                     {label}
//                                 </LinkComponent>
//                             </li>
//                             {!isLast && <Divider />}
//                         </div>
//                     );
//                 })}
//             </ul>

//             {/* Right: Auth Buttons */}
//             {/*<div className="mr-20 flex items-center gap-3">
//                 <Link to="/login" className="px-4 py-2 border border-gray-400 rounded hover:bg-gray-700 transition">
//                     Prijava
//                 </Link>
//                 <Link to="/register" className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-500 transition">
//                     Registracija
//                 </Link>
//             </div>*/}
//             <div
//                 className={`lg:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out ${isMobileMenuOpen ? "max-h-[28rem]" : "max-h-0"
//                     }`}
//             >
//                 <ul className="flex flex-col border-t border-white/10 px-4 py-2">
//                     <li>
//                         <Link to="/" onClick={closeMenus} className="block px-2 py-3 hover:bg-white/10 rounded transition-colors">
//                             Početna
//                         </Link>
//                     </li>

//                     <li>
//                         <button
//                             type="button"
//                             onClick={() => setIsProductsOpen((prev) => !prev)}
//                             className="w-full flex items-center justify-between px-2 py-3 hover:bg-white/10 rounded transition-colors"
//                         >
//                             <span>Artikli</span>
//                             <Icons.Chevron open={isProductsOpen} />
//                         </button>
//                         <div
//                             className={`overflow-hidden transition-[max-height] duration-200 ease-in-out ${isProductsOpen ? "max-h-96" : "max-h-0"
//                                 }`}
//                         >
//                             <div className="pl-4 pb-2 flex flex-col text-gray-200 text-sm">
//                                 {productLinks.map((p) => (
//                                     <Link
//                                         key={p.to}
//                                         to={p.to}
//                                         onClick={closeMenus}
//                                         className="px-2 py-2 hover:bg-white/10 rounded transition-colors"
//                                     >
//                                         {p.label}
//                                     </Link>
//                                 ))}
//                             </div>
//                         </div>
//                     </li>

//                     <li>
//                         <Link to="/about" onClick={closeMenus} className="block px-2 py-3 hover:bg-white/10 rounded transition-colors">
//                             O nama
//                         </Link>
//                     </li>

//                     <li>
//                         <Link to="/contact" onClick={closeMenus} className="block px-2 py-3 hover:bg-white/10 rounded transition-colors">
//                             Kontakt
//                         </Link>
//                     </li>
//                 </ul>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;

import { useState } from "react";
import { Link } from "react-router-dom";
import FlyoutLink from "./FlyoutLink";

const Divider = () => <div className="w-px h-6 bg-gray-400 mx-4" />;

const Icons = {
    Cart: () => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
        </svg>
    ),
    Printer: () => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5Zm-3 0h.008v.008H15V10.5Z" />
        </svg>
    ),
    Bars: () => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
        </svg>
    ),
    X: () => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
    ),
    Chevron: ({ open }) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`size-5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
    ),
};

const productLinks = [
    { to: "/souvenirs", label: "Suveniri Posušja" },
    { to: "/mug", label: "Šalice" },
    { to: "/magnets", label: "Magneti" },
    { to: "/printed", label: "Tiskanice" },
    { to: "/keyring", label: "Privjesci" },
    { to: "/ncr", label: "Blokovska roba" },
    { to: "/stamp", label: "Pečati" },
    { to: "/other", label: "Ostalo" },
];

const navLinks = [
    { id: "home", to: "/", label: "Početna" },
    {
        id: "products",
        to: "#",
        label: "Artikli",
        flyoutContent: () => (
            <div className="w-64 p-4 space-y-1">
                {productLinks.map((p) => (
                    <Link key={p.to} to={p.to} className="block px-4 py-2 rounded hover:bg-gray-100 transition-colors">
                        {p.label}
                    </Link>
                ))}
            </div>
        ),
    },
    { id: "about", to: "/about", label: "O nama" },
    { id: "contact", to: "/contact", label: "Kontakt" },
    // Uncomment when needed:
    // {
    //   id: "cart",
    //   to: "/cart",
    //   label: (
    //     <span className="inline-flex items-center gap-2">
    //       Košarica <Icons.Cart />
    //     </span>
    //   ),
    //   flyoutContent: () => <div className="w-96 p-6">Košarica</div>,
    // },
];

// ---------- Component ----------
const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isProductsOpen, setIsProductsOpen] = useState(false);

    const closeMenus = () => {
        setIsMobileMenuOpen(false);
        setIsProductsOpen(false);
    };

    return (
        <nav className="flex items-center justify-between bg-gradient-to-r from-gray-900 to-gray-700 text-white p-5 sticky top-0 z-50">
            {/* Left: Logo */}
            <div className="ml-4 lg:ml-20">
                <Icons.Printer />
            </div>

            {/* Center: Navigation Links (desktop only) */}
            <ul className="hidden lg:flex items-center flex-1 mx-10">
                {navLinks.map((item, index) => {
                    const { id, to, label, flyoutContent } = item;
                    const isLast = index === navLinks.length - 1;
                    const LinkComponent = flyoutContent ? FlyoutLink : Link;

                    return (
                        <div key={id} className="flex items-center">
                            <li>
                                <LinkComponent to={to} FlyoutContent={flyoutContent}>
                                    {label}
                                </LinkComponent>
                            </li>
                            {!isLast && <Divider />}
                        </div>
                    );
                })}
            </ul>

            {/* Right: Auth Buttons */}
            {/*<div className="mr-20 flex items-center gap-3">
                <Link to="/login" className="px-4 py-2 border border-gray-400 rounded hover:bg-gray-700 transition">
                    Prijava
                </Link>
                <Link to="/register" className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-500 transition">
                    Registracija
                </Link>
            </div>*/}

            {/* Mobile: Hamburger toggle */}
            <button
                type="button"
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                className="lg:hidden mr-4 p-2 rounded hover:bg-white/10 transition-colors"
                aria-label={isMobileMenuOpen ? "Zatvori izbornik" : "Otvori izbornik"}
                aria-expanded={isMobileMenuOpen}
            >
                {isMobileMenuOpen ? <Icons.X /> : <Icons.Bars />}
            </button>

            {/* Mobile menu panel */}
            <div
                className={`lg:hidden absolute top-full left-0 w-full bg-gradient-to-r from-gray-900 to-gray-700 text-white overflow-hidden transition-[max-height] duration-1000 ease-in-out ${isMobileMenuOpen ? "max-h-[28rem]" : "max-h-0"
                    }`}
            >
                <ul className="flex flex-col px-4 py-2">
                    <li>
                        <Link to="/" onClick={closeMenus} className="block px-2 py-3 hover:bg-white/10 rounded transition-colors">
                            Početna
                        </Link>
                    </li>

                    <li>
                        <button
                            type="button"
                            onClick={() => setIsProductsOpen((prev) => !prev)}
                            className="w-full flex items-center justify-between px-2 py-3 hover:bg-white/10 rounded transition-colors"
                        >
                            <span>Artikli</span>
                            <Icons.Chevron open={isProductsOpen} />
                        </button>
                        <div
                            className={`overflow-hidden transition-[max-height] duration-700 ease-in-out ${isProductsOpen ? "max-h-96" : "max-h-0"
                                }`}
                        >
                            <div className="pl-4 pb-2 flex flex-col text-gray-200 text-sm">
                                {productLinks.map((p) => (
                                    <Link
                                        key={p.to}
                                        to={p.to}
                                        onClick={closeMenus}
                                        className="px-2 py-2 hover:bg-white/10 rounded transition-colors"
                                    >
                                        {p.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </li>

                    <li>
                        <Link to="/about" onClick={closeMenus} className="block px-2 py-3 hover:bg-white/10 rounded transition-colors">
                            O nama
                        </Link>
                    </li>

                    <li>
                        <Link to="/contact" onClick={closeMenus} className="block px-2 py-3 hover:bg-white/10 rounded transition-colors">
                            Kontakt
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;