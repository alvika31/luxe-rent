import React from "react";
import { Phone, MessageCircle, Mail, Car, Star, Shield } from "lucide-react";
import { usePage } from "@inertiajs/react";

const CtaSection = () => {
    const { config } = usePage().props;
    return (
        <section className="py-16 bg-gradient-to-r from-gray-900 to-blue-900 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-20 h-20 bg-blue-400 rounded-full"></div>
                <div className="absolute top-40 right-20 w-16 h-16 bg-blue-300 rounded-full"></div>
                <div className="absolute bottom-20 left-20 w-12 h-12 bg-blue-500 rounded-full"></div>
                <div className="absolute bottom-10 right-10 w-24 h-24 bg-blue-400 rounded-full"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="text-white">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-400/30 text-blue-200 px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <Car className="w-4 h-4" />
                            Sewa Mobil, Hiace & Minibus
                        </div>

                        {/* Title */}
                        <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                            Cari layanan sewa kendaraan terpercaya di Indonesia?{" "}
                            <span className="text-blue-400">
                                R-Luxe Rent Mobil
                            </span>{" "}
                            Solusinya
                        </h1>

                        {/* Description */}
                        <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                            Kami menyediakan berbagai pilihan armada mulai dari
                            mobil keluarga, mobil mewah, Hiace, hingga minibus
                            untuk kebutuhan wisata maupun rombongan besar. Semua
                            kendaraan terawat dan siap digunakan kapan pun Anda
                            butuh.
                        </p>

                        {/* Features */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                            <div className="flex items-center gap-2 text-blue-200">
                                <Shield className="w-5 h-5" />
                                <span className="text-sm">Terjamin & Aman</span>
                            </div>
                            <div className="flex items-center gap-2 text-blue-200">
                                <Star className="w-5 h-5" />
                                <span className="text-sm">
                                    Kualitas Terbaik
                                </span>
                            </div>
                            <div className="flex items-center gap-2 text-blue-200">
                                <Car className="w-5 h-5" />
                                <span className="text-sm">Bervariasi</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - CTA Cards */}
                    <div className="space-y-6">
                        {/* WhatsApp CTA */}
                        <div className="bg-white rounded-2xl shadow-2xl p-6 border border-green-100 transform hover:-translate-y-1 transition-all duration-300">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <MessageCircle className="w-6 h-6 text-green-600" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                                        WhatsApp
                                    </h3>
                                    <p className="text-gray-600 text-sm mb-4">
                                        Hubungi kami langsung via WhatsApp untuk
                                        respon cepat dan informasi detail
                                        tentang ketersediaan mobil.
                                    </p>
                                    <a
                                        href={`https://wa.me/${config.whatsapp}?text=Hallo R-Luxe Rent`}
                                        className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-2"
                                    >
                                        <MessageCircle className="w-5 h-5" />
                                        Hubungi via WhatsApp
                                    </a>
                                    <p className="text-green-600 text-xs mt-2 text-center font-medium">
                                        Respon dalam 5 menit
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Phone CTA */}
                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-2xl p-6 text-white transform hover:-translate-y-1 transition-all duration-300">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg font-bold mb-2">
                                        Telepon Langsung
                                    </h3>
                                    <p className="text-blue-100 text-sm mb-4">
                                        Butuh bantuan cepat? Hubungi nomor
                                        telepon kami untuk konsultasi langsung
                                        dengan tim customer service.
                                    </p>
                                    <a
                                        href={`tel: ${config.phone_number}`}
                                        className="w-full bg-white text-blue-600 hover:bg-gray-100 py-3 px-4 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-2"
                                    >
                                        <Phone className="w-5 h-5" />
                                        Hubungi Sekarang
                                    </a>
                                    <p className="text-white/80 text-xs mt-2 text-center font-medium">
                                        Layanan 24/7
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Additional Info */}
                <div className="text-center mt-12 pt-8 border-t border-white/10">
                    <p className="text-blue-200 text-sm">
                        📍 Beroperasi dengan jaringan tersebar di
                        seluruh Indonesia • 🚗 Fleet Terawat • 💰 Harga
                        Kompetitif
                    </p>
                </div>
            </div>
        </section>
    );
};

export default CtaSection;
