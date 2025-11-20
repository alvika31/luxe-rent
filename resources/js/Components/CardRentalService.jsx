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
        },
        {
            title: "Pilihan Mobil Lengkap & Terawat",
            description:
                "Kami menghadirkan beragam tipe kendaraan, mulai dari mobil keluarga yang nyaman hingga mobil premium untuk acara spesial. Setiap unit selalu dirawat dengan baik agar tetap dalam kondisi prima.",
            icon: <Car className="w-8 h-8" />,
            color: "bg-green-50 border-green-200 text-green-600",
        },
        {
            title: "Harga Ramah di Kantong",
            description:
                "Nikmati tarif sewa yang bersaing dan jelas tanpa biaya tersembunyi. Kami juga rutin menghadirkan promo menarik untuk pelanggan setia.",
            icon: <DollarSign className="w-8 h-8" />,
            color: "bg-amber-50 border-amber-200 text-amber-600",
        },
        {
            title: "Pemesanan Cepat & Mudah",
            description:
                "Booking mobil kini jauh lebih simpel. Cukup pesan melalui website atau aplikasi kami, dan kendaraan pilihan Anda siap diambil dan digunakan.",
            icon: <Clock className="w-8 h-8" />,
            color: "bg-purple-50 border-purple-200 text-purple-600",
        },
        {
            title: "Program Keanggotaan Eksklusif",
            description:
                "Dapatkan keuntungan lebih dengan bergabung dalam program membership kami. Prosesnya mudah, manfaatnya besar, termasuk harga sewa yang lebih hemat.",
            icon: <Users className="w-8 h-8" />,
            color: "bg-red-50 border-red-200 text-red-600",
        },
        {
            title: "Layanan Pelanggan 24/7",
            description:
                "Tim kami siap membantu kapan pun Anda butuh. Hubungi layanan pelanggan 24 jam kami untuk pertanyaan atau bantuan selama masa penyewaan.",
            icon: <Headphones className="w-8 h-8" />,
            color: "bg-indigo-50 border-indigo-200 text-indigo-600",
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
                    Layanan Sewa Mobil Premium
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Nikmati pengalaman berkendara yang nyaman dan hemat dengan
                    berbagai pilihan mobil terbaik kami
                </p>

                {/* Benefits List */}
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm"
                        >
                            <CheckCircle className="w-5 h-5 text-green-500" />
                            <span className="text-sm font-medium text-gray-700">
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
                            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden"
                        >
                            {/* Icon Section */}
                            <div className={`p-6 border-b ${feature.color}`}>
                                <div className="flex items-center justify-between">
                                    <div className="p-3 rounded-xl bg-white shadow-sm">
                                        {feature.icon}
                                    </div>
                                    <div className="text-2xl font-bold text-gray-300 opacity-50">
                                        {String(index + 1).padStart(2, "0")}
                                    </div>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>

                            {/* Hover Effect Border */}
                            <div
                                className={`h-1 w-0 group-hover:w-full transition-all duration-300 ${
                                    feature.color
                                        .replace("bg-", "bg-")
                                        .replace("50", "500")
                                        .split(" ")[0]
                                }`}
                            ></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
