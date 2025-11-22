import React from "react";
import { usePage } from "@inertiajs/react";
import { MessageCircle } from "lucide-react";

const LangkahSewa = () => {
    const { config } = usePage().props;

    // Ikon 3D Custom dengan SVG
    const Calendar3D = () => (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
            <path
                d="M3 9H21M7 3V5M17 3V5M6 12H8M11 12H13M16 12H18M6 15H8M11 15H13M16 15H18M6 18H8M11 18H13M16 18H18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
            />
            <path
                d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
                stroke="currentColor"
                strokeWidth="2"
                fill="url(#gradient1)"
            />
            <defs>
                <linearGradient
                    id="gradient1"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                >
                    <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="#1D4ED8" stopOpacity="0.3" />
                </linearGradient>
            </defs>
        </svg>
    );

    const WhatsApp3D = () => (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
            <path
                d="M17.472 14.382C17.231 14.284 15.976 13.773 15.758 13.685C15.54 13.597 15.381 13.553 15.223 13.794C15.065 14.035 14.575 14.637 14.433 14.811C14.291 14.985 14.149 15.005 13.908 14.907C13.667 14.809 12.835 14.562 11.848 13.705C11.071 13.035 10.543 12.196 10.401 11.955C10.259 11.714 10.393 11.586 10.513 11.468C10.619 11.363 10.749 11.193 10.871 11.051C10.993 10.909 11.037 10.807 11.113 10.661C11.189 10.515 11.149 10.385 11.095 10.271C11.041 10.157 10.543 8.932 10.333 8.468C10.13 8.02 9.921 8.087 9.763 8.081C9.617 8.075 9.451 8.074 9.285 8.074C9.119 8.074 8.849 8.136 8.625 8.378C8.401 8.62 7.727 9.266 7.727 10.646C7.727 12.026 8.665 13.354 8.819 13.571C8.973 13.788 11.073 16.62 13.836 17.725C14.236 17.892 14.551 17.993 14.794 18.065C15.289 18.213 15.744 18.193 16.104 18.125C16.508 18.048 17.539 17.531 17.787 16.959C18.035 16.387 18.035 15.892 17.959 15.791C17.883 15.69 17.713 15.48 17.472 14.382Z"
                fill="currentColor"
            />
            <path
                d="M12 2C6.477 2 2 6.477 2 12C2 13.815 2.465 15.519 3.283 17C2.558 18.004 2 19.106 2 20.299C2 21.856 3.144 23 4.701 23C5.894 23 6.996 22.442 8 21.717C9.481 22.535 11.185 23 13 23C18.523 23 23 18.523 23 13C23 7.477 18.523 2 12 2Z"
                stroke="currentColor"
                strokeWidth="2"
                fill="url(#gradient2)"
            />
            <defs>
                <linearGradient
                    id="gradient2"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                >
                    <stop offset="0%" stopColor="#25D366" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="#128C7E" stopOpacity="0.3" />
                </linearGradient>
            </defs>
        </svg>
    );

    const Payment3D = () => (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
            <rect
                x="2"
                y="5"
                width="20"
                height="14"
                rx="3"
                stroke="currentColor"
                strokeWidth="2"
                fill="url(#gradient3)"
            />
            <path
                d="M2 10H22"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
            />
            <circle cx="18" cy="15" r="1" fill="currentColor" />
            <circle cx="15" cy="15" r="1" fill="currentColor" />
            <defs>
                <linearGradient
                    id="gradient3"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                >
                    <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.3" />
                </linearGradient>
            </defs>
        </svg>
    );

    const langkahList = [
        {
            icon: Calendar3D,
            title: "Pilih Mobil & Tanggal Sewa",
            description:
                "Lihat katalog mobil kami, lalu tentukan tanggal dan durasi penyewaan sesuai kebutuhan Anda. Pastikan ketersediaan unit di tanggal yang diinginkan.",
            step: "01",
            gradient: "from-blue-500 to-blue-600",
        },
        {
            icon: WhatsApp3D,
            title: "Hubungi via WhatsApp",
            description:
                "Klik tombol 'Pesan Sekarang' untuk langsung terhubung dengan tim kami melalui WhatsApp. Kami akan bantu proses pemesanan dan menjawab pertanyaan Anda.",
            step: "02",
            gradient: "from-green-500 to-green-600",
        },
        {
            icon: Payment3D,
            title: "Konfirmasi & Pembayaran",
            description:
                "Setelah detail pemesanan disepakati, lakukan pembayaran untuk mengamankan mobil pilihan Anda. Tim kami akan mengonfirmasi dan memproses sewa Anda.",
            step: "03",
            gradient: "from-purple-500 to-purple-600",
        },
    ];

    return (
        <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-blue-700 px-6 py-3 rounded-2xl text-sm font-semibold mb-6 shadow-lg border border-white/20">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        Proses Mudah & Cepat
                    </div>
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">
                        3 Langkah Mudah Sewa Mobil di{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                            R-Luxe Rent
                        </span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Kami siap membantu Anda menemukan kendaraan yang tepat
                        untuk setiap kebutuhan perjalanan—baik harian, mingguan,
                        hingga bulanan. Dapatkan layanan cepat, responsif, dan
                        transparan hanya dengan beberapa langkah mudah.
                    </p>
                </div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    {langkahList.map((langkah, index) => (
                        <div key={index} className="relative group">
                            {/* Step Card */}
                            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-8 h-full relative overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-3">
                                {/* 3D Background Effect */}
                                <div
                                    className={`absolute inset-0 bg-gradient-to-br ${langkah.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}
                                />

                                {/* Floating Elements */}
                                <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-100/30 rounded-full blur-xl group-hover:bg-blue-200/40 transition-all duration-500" />
                                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-100/20 rounded-full blur-lg group-hover:bg-purple-200/30 transition-all duration-500" />

                                {/* Step Number with 3D Effect */}
                                <div className="absolute top-6 right-6 w-14 h-14 bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-2xl flex items-center justify-center text-lg font-bold shadow-lg border border-gray-700/50 transform group-hover:scale-110 transition-transform duration-300">
                                    {langkah.step}
                                </div>

                                {/* 3D Icon Container */}
                                <div className="relative mb-8">
                                    <div className="w-20 h-20 bg-gradient-to-br from-white to-gray-100 rounded-2xl flex items-center justify-center shadow-lg border border-white/50 group-hover:shadow-2xl transition-all duration-500">
                                        <div className="relative">
                                            <langkah.icon />
                                            {/* Reflection Effect */}
                                            <div className="absolute top-1 left-1 w-2 h-2 bg-white/30 rounded-full blur-sm" />
                                        </div>
                                    </div>
                                    {/* Shadow under icon */}
                                    <div className="absolute -bottom-2 left-4 w-16 h-4 bg-black/10 rounded-full blur-sm group-hover:bg-black/20 transition-all duration-500" />
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold text-gray-800 mb-4">
                                    {langkah.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {langkah.description}
                                </p>

                                {/* Animated Border Bottom */}
                                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent group-hover:w-3/4 transition-all duration-500" />

                                {/* Connector Line for Desktop with 3D effect */}
                                {index < langkahList.length - 1 && (
                                    <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                                        <div className="w-8 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full relative">
                                            <div className="absolute -right-1 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-white border-2 border-blue-400 rounded-full shadow-lg animate-pulse" />
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="text-center mt-12">
                    <a
                        href={`https://wa.me/${config.whatsapp}?text=Hallo R-Luxe Rent`}
                        className="inline-flex bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:scale-105 items-center gap-3 mx-auto"
                    >
                        <MessageCircle className="w-6 h-6" />
                        Hubungi via WhatsApp Sekarang
                    </a>

                    {/* Info Text */}
                    <div className="mt-6 flex items-center justify-center gap-4 text-gray-600">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                            <span className="text-sm font-medium">
                                Respons cepat dalam 5 menit
                            </span>
                        </div>
                        <div className="w-1 h-1 bg-gray-400 rounded-full" />
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                            <span className="text-sm font-medium">
                                Layanan 24/7
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LangkahSewa;
