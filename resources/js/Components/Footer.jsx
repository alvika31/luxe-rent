import React from "react";
import {
    MapPin,
    Phone,
    Mail,
    Clock,
    Car,
    Facebook,
    Instagram,
    Twitter,
    Youtube,
    MessageCircle,
} from "lucide-react";
import { config, Link, usePage } from "@inertiajs/react";
import FloatingWhatsApp from "./FloatingWhatsapp";

const Footer = () => {
    const { config } = usePage().props;

    return (
        <footer className="bg-gray-900 text-white">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    {/* Kolom 1: Tentang Kami */}
                    <div className="space-y-4">
                        <img src="/logo.jpg" className="w-16" />
                        <p className="text-gray-300 leading-relaxed">
                            R-Luxe Rent adalah penyedia layanan sewa kendaraan
                            terpercaya di Indonesia. Kami menyediakan berbagai
                            jenis armada berkualitas—mulai dari mobil keluarga,
                            SUV, mobil premium, Hiace, hingga minibus—dengan
                            pelayanan profesional untuk kebutuhan perjalanan
                            bisnis, wisata, maupun perjalanan rombongan Anda.
                        </p>
                        <div className="flex space-x-4 pt-4">
                            <a
                                href={config.facebook}
                                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
                            >
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a
                                href={config.instagram}
                                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors duration-200"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Kolom 2: Kontak Kami */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold mb-6 border-l-4 border-blue-400 pl-3">
                            Kontak Kami
                        </h3>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <a href={`tel:${config.phone_number}`}>
                                        <p className="font-semibold">Telepon</p>

                                        <p className="text-gray-300">
                                            {config.phone_number}
                                        </p>
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <MessageCircle className="w-5 h-5" />
                                </div>
                                <div>
                                    <a
                                        href={`https://wa.me/${config.whatsapp}?text=Hallo R-LUXE RENT`}
                                    >
                                        <p className="font-semibold">
                                            Whatsapp
                                        </p>
                                        <p className="text-gray-300">
                                            {config.whatsapp}
                                        </p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Kolom 3: Alamat & Maps */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold mb-6 border-l-4 border-blue-400 pl-3">
                            Lokasi Kami
                        </h3>
                        <div className="flex items-start gap-3 mb-4">
                            <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                <MapPin className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="font-semibold">Kantor Pusat</p>
                                <p className="text-gray-300 leading-relaxed">
                                    Jl. Sapujagat No.11-G, RT.3/RW.9, Sukaluyu,
                                    Kec. Cibeunying Kaler, Kota Bandung, Jawa
                                    Barat 40123
                                </p>
                            </div>
                        </div>

                        {/* Embed Maps */}
                        <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700">
                            <div className="h-48 bg-gray-700 relative flex items-center justify-center">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.940315678822!2d107.6304935!3d-6.8977422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e7002726696b%3A0xe690bc813f4ed6b8!2sR-LUXE%20RENT!5e0!3m2!1sen!2sid!4v1763619704739!5m2!1sen!2sid"
                                    width="100%"
                                    height="450"
                                    allowfullscreen=""
                                    loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade"
                                ></iframe>

                                {/* Tombol buka maps */}
                                <a
                                    href="https://maps.app.goo.gl/gMk9fVpoyPA5NkSK6"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="absolute bottom-3 right-3 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center gap-1"
                                >
                                    <MapPin className="w-4 h-4" />
                                    Buka Maps
                                </a>
                            </div>
                        </div>

                        {/* Additional Info */}
                        <div className="bg-blue-900/30 border border-blue-800 rounded-lg p-3 mt-4">
                            <p className="text-sm text-blue-200 text-center">
                                🚗 Free area Bandung & Sekitarnya
                                <br />
                                📍 Pickup & Delivery Available
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="text-gray-400 text-sm">
                            © {new Date().getFullYear()} R-Luxe Rent Mobil. All
                            rights reserved.
                        </div>
                    </div>
                </div>
            </div>
            <FloatingWhatsApp />
        </footer>
    );
};

export default Footer;
