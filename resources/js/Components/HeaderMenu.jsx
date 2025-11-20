import { Link } from "@inertiajs/react";
import React, { useState } from "react";

const HeaderMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        { name: "Home", href: "/" },
        { name: "Daftar Mobil", href: "/daftar-mobil" },
        { name: "Reservasi", href: "/reservasi" },
        { name: "Kontak", href: "/kontak" },
        { name: "Artikel", href: "/artikel" },
    ];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-white shadow-lg sticky top-0 z-50">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <div className="flex items-center">
                        <img src="/logo.jpg" className="w-16" />
                    </div>

                    {/* Desktop Menu */}
                    <nav className="hidden md:flex space-x-8">
                        {menuItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 relative group"
                            >
                                {item.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        ))}
                    </nav>

                    {/* CTA Button - Desktop */}
                    <div className="hidden md:block">
                        <a
                            href={"/admin"}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-300 shadow-md hover:shadow-lg"
                        >
                            Login
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden flex flex-col w-6 h-6 justify-center items-center space-y-1"
                        onClick={toggleMenu}
                    >
                        <span
                            className={`block h-0.5 w-6 bg-gray-700 transition-transform duration-300 ${
                                isMenuOpen ? "rotate-45 translate-y-1.5" : ""
                            }`}
                        ></span>
                        <span
                            className={`block h-0.5 w-6 bg-gray-700 transition-opacity duration-300 ${
                                isMenuOpen ? "opacity-0" : "opacity-100"
                            }`}
                        ></span>
                        <span
                            className={`block h-0.5 w-6 bg-gray-700 transition-transform duration-300 ${
                                isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                            }`}
                        ></span>
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
                        isMenuOpen ? "max-h-screen py-4" : "max-h-0"
                    }`}
                >
                    <nav className="flex flex-col space-y-4">
                        {menuItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-gray-700 hover:text-blue-600 font-medium py-2 px-4 rounded-lg hover:bg-blue-50 transition-all duration-300"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <a
                            href="/admin"
                            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 mt-4"
                        >
                            Login
                        </a>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default HeaderMenu;
