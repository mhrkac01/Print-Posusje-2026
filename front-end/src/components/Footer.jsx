import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-800 text-white rounded-t-md">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-8">
                {/* Grid: 1 col on mobile, 2 cols on md, 3 cols on lg */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 text-center md:text-left">

                    {/* Brand Section */}
                    <section className="space-y-4 flex flex-col items-center md:items-start">
                        <h2 className="text-3xl font-bold text-white">
                            Print Posušje
                        </h2>
                        <p className="text-gray-400 text-sm max-w-md leading-relaxed">
                            Kvalitetan tisak za vaše poslovne i privatne potrebe.
                        </p>
                        {/* Social Icons (optional – you can enable these) */}
                        {/* <div className="flex space-x-3 pt-2">
                            <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full bg-gray-700 flex items-center justify-center text-gray-300 hover:bg-indigo-600 hover:text-white transition">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full bg-gray-700 flex items-center justify-center text-gray-300 hover:bg-indigo-600 hover:text-white transition">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="#" aria-label="YouTube" className="w-9 h-9 rounded-full bg-gray-700 flex items-center justify-center text-gray-300 hover:bg-indigo-600 hover:text-white transition">
                                <i className="fab fa-youtube"></i>
                            </a>
                        </div>*/}
                    </section>

                    {/* Quick Links – Navigation */}
                    <nav className="space-y-4 flex flex-col items-center md:items-start">
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                            Brze poveznice
                        </h3>
                        <ul className="space-y-2">
                            <li><Link to="/" className="text-gray-400 hover:text-white text-sm transition">Početna</Link></li>
                            <li><Link to="/articles" className="text-gray-400 hover:text-white text-sm transition">Artikli</Link></li>
                            <li><Link to="/about" className="text-gray-400 hover:text-white text-sm transition">O nama</Link></li>
                            <li><Link to="/contact" className="text-gray-400 hover:text-white text-sm transition">Kontakt</Link></li>
                            <li><Link to="/cart" className="text-gray-400 hover:text-white text-sm transition">Košarica</Link></li>
                        </ul>
                    </nav>

                    {/* Support / Contact Info */}
                    <section className="space-y-4 flex flex-col items-center md:items-start">
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                            Pomoć
                        </h3>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li className="leading-relaxed">
                                Fra Grge Martića 21,<br />88240 Posušje,<br />Bosna i Hercegovina
                            </li>
                            <li>
                                <a href="mailto:printposusje@gmail.com" className="hover:text-white transition">
                                    printposusje@gmail.com
                                </a>
                            </li>
                            <li>
                                <a href="tel:+38763354442" className="hover:text-white transition">
                                    +387 63 354 442
                                </a>
                            </li>
                        </ul>
                    </section>

                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-700 py-6 mt-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        &copy; {currentYear} Print Posušje. Sva prava pridržana.
                    </p>
                    <div className="flex space-x-6 text-sm">
                        <Link to="/privacy" className="text-gray-500 hover:text-white transition">
                            Pravila privatnosti
                        </Link>
                        <Link to="/terms" className="text-gray-500 hover:text-white transition">
                            Uvjeti korištenja
                        </Link>
                        <Link to="/cookies" className="text-gray-500 hover:text-white transition">
                            Politika kolačića
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;