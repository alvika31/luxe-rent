import React from "react";
import {
    Calendar,
    Car,
    DollarSign,
    Clock,
    Users,
    Headphones,
    CheckCircle,
} from "lucide-react";

export default function CardRentalService() {
    const features = [
        {
            title: "Fleksibel dan Praktis",
            description:
                "Rasakan kemudahan bepergian ke mana pun Anda mau dengan layanan sewa mobil yang bisa disesuaikan kebutuhan. Pilih sendiri jenis kendaraan dan lama penyewaannya—semua tanpa repot!",
            icon: <Calendar className="w-8 h-8" />,
            color: "bg-blue-50 border-blue-200 text-blue-600",
            gradient: "from-blue-400 to-blue-600",
            shadow: "shadow-blue-500/40",
        },
        {
            title: "Pilihan Mobil Lengkap & Terawat",
            description:
                "Kami menyediakan berbagai pilihan mobil, Hiace, dan minibus yang cocok untuk keluarga, perjalanan bisnis, wisata, hingga rombongan besar. Semua unit selalu dirawat secara berkala demi kenyamanan perjalanan Anda.",
            icon: <Car className="w-8 h-8" />,
            color: "bg-green-50 border-green-200 text-green-600",
            gradient: "from-green-400 to-green-600",
            shadow: "shadow-green-500/40",
        },
        {
            title: "Harga Ramah di Kantong",
            description:
                "Nikmati tarif sewa yang bersaing dan jelas tanpa biaya tersembunyi. Kami juga rutin menghadirkan promo menarik untuk pelanggan setia.",
            icon: <DollarSign className="w-8 h-8" />,
            color: "bg-amber-50 border-amber-200 text-amber-600",
            gradient: "from-amber-400 to-amber-600",
            shadow: "shadow-amber-500/40",
        },
        {
            title: "Pemesanan Cepat & Mudah",
            description:
                "Booking mobil kini jauh lebih simpel. Cukup pesan melalui website atau aplikasi kami, dan kendaraan pilihan Anda siap diambil dan digunakan.",
            icon: <Clock className="w-8 h-8" />,
            color: "bg-purple-50 border-purple-200 text-purple-600",
            gradient: "from-purple-400 to-purple-600",
            shadow: "shadow-purple-500/40",
        },
        {
            title: "Program Keanggotaan Eksklusif",
            description:
                "Dapatkan keuntungan lebih dengan bergabung dalam program membership kami. Prosesnya mudah, manfaatnya besar, termasuk harga sewa yang lebih hemat.",
            icon: <Users className="w-8 h-8" />,
            color: "bg-red-50 border-red-200 text-red-600",
            gradient: "from-red-400 to-red-600",
            shadow: "shadow-red-500/40",
        },
        {
            title: "Layanan Pelanggan 24/7",
            description:
                "Tim kami siap membantu kapan pun Anda butuh. Hubungi layanan pelanggan 24 jam kami untuk pertanyaan atau bantuan selama masa penyewaan.",
            icon: <Headphones className="w-8 h-8" />,
            color: "bg-indigo-50 border-indigo-200 text-indigo-600",
            gradient: "from-indigo-400 to-indigo-600",
            shadow: "shadow-indigo-500/40",
        },
    ];

    const benefits = [
        "Tanpa biaya tersembunyi",
        "Semua mobil kondisi prima",
        "Proses booking mudah",
        "Support 24 jam",
        "Harga kompetitif",
        "Fleksibel waktu sewa",
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="max-w-7xl mx-auto text-center mb-16">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    Layanan Sewa Mobil, Hiace & Minibus Premium
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Nikmati perjalanan nyaman dan hemat dengan pilihan kendaraan
                    terbaik — mulai dari city car, mobil keluarga, Hiace, hingga
                    minibus untuk rombongan besar.
                </p>

                {/* Benefits List */}
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-white/20"
                        >
                            <div className="relative">
                                <div className="absolute inset-0 bg-green-500 rounded-full blur-sm opacity-60 animate-pulse"></div>
                                <CheckCircle className="w-6 h-6 text-green-600 relative z-10 drop-shadow-md" />
                            </div>
                            <span className="text-sm font-semibold text-gray-800">
                                {benefit}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Features Grid */}
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/20 relative overflow-hidden"
                        >
                            {/* Background Effect */}
                            <div
                                className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}
                            ></div>

                            {/* Icon Section */}
                            <div className={`p-8 relative z-10`}>
                                <div className="flex items-center justify-between">
                                    {/* 3D Icon Container */}
                                    <div className="relative">
                                        {/* Main 3D Icon */}
                                        <div
                                            className={`
                                            relative p-4 rounded-2xl 
                                            bg-gradient-to-br ${feature.gradient}
                                            shadow-2xl ${feature.shadow}
                                            transition-all duration-500 
                                            transform group-hover:scale-110 
                                            group-hover:rotate-3 
                                            group-hover:shadow-3xl
                                            border border-white/30
                                            perspective-1000
                                            transform-style-3d
                                        `}
                                        >
                                            {/* Icon dengan efek 3D */}
                                            <div className="text-white drop-shadow-lg transform translate-z-10">
                                                {feature.icon}
                                            </div>

                                            {/* Top Highlight */}
                                            <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/30 to-transparent rounded-t-2xl"></div>

                                            {/* Bottom Shadow */}
                                            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/10 to-transparent rounded-b-2xl"></div>
                                        </div>

                                        {/* 3D Depth Shadow */}
                                        <div
                                            className={`
                                            absolute inset-0 
                                            rounded-2xl 
                                            blur-xl opacity-50 
                                            group-hover:opacity-70 
                                            group-hover:blur-2xl
                                            transition-all duration-500
                                            bg-gradient-to-br ${feature.gradient}
                                            transform translate-y-3 scale-95
                                            -z-10
                                        `}
                                        ></div>

                                        {/* Floating Particles */}
                                        <div className="absolute -top-2 -right-2 w-4 h-4 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
                                        <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping animation-delay-300"></div>
                                    </div>

                                    <div className="text-2xl font-bold text-gray-300/60 group-hover:text-gray-400 transition-colors duration-300">
                                        {String(index + 1).padStart(2, "0")}
                                    </div>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="p-8 pt-4 relative z-10">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed text-lg group-hover:text-gray-700 transition-colors duration-300">
                                    {feature.description}
                                </p>
                            </div>

                            {/* 3D Hover Effect Border */}
                            <div
                                className={`
                                absolute bottom-0 left-0 right-0 h-2 
                                bg-gradient-to-r ${feature.gradient}
                                transform origin-left scale-x-0 
                                group-hover:scale-x-100 
                                transition-transform duration-700
                                rounded-b-3xl
                                shadow-lg ${feature.shadow}
                            `}
                            ></div>

                            {/* Corner Accents */}
                            <div
                                className={`absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 ${feature.color
                                    .split(" ")[2]
                                    .replace(
                                        "text-",
                                        "border-"
                                    )} rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                            ></div>
                            <div
                                className={`absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 ${feature.color
                                    .split(" ")[2]
                                    .replace(
                                        "text-",
                                        "border-"
                                    )} rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                            ></div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Custom CSS untuk efek 3D tambahan */}
            <style jsx>{`
                .perspective-1000 {
                    perspective: 1000px;
                }
                .transform-style-3d {
                    transform-style: preserve-3d;
                }
                .translate-z-10 {
                    transform: translateZ(10px);
                }
                .animation-delay-300 {
                    animation-delay: 300ms;
                }
                .shadow-3xl {
                    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
                }
            `}</style>
        </div>
    );
}
