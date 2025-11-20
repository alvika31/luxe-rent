import React from "react";
import { Calendar, MessageCircle, CreditCard, CheckCircle } from "lucide-react";
import { usePage } from "@inertiajs/react";

const LangkahSewa = () => {
    const { config } = usePage().props;
    const langkahList = [
        {
            icon: Calendar,
            title: "Pilih Mobil & Tanggal Sewa",
            description:
                "Lihat katalog mobil kami, lalu tentukan tanggal dan durasi penyewaan sesuai kebutuhan Anda. Pastikan ketersediaan unit di tanggal yang diinginkan.",
            step: "01",
        },
        {
            icon: MessageCircle,
            title: "Hubungi via WhatsApp",
            description:
                "Klik tombol 'Pesan Sekarang' untuk langsung terhubung dengan tim kami melalui WhatsApp. Kami akan bantu proses pemesanan dan menjawab pertanyaan Anda.",
            step: "02",
        },
        {
            icon: CreditCard,
            title: "Konfirmasi & Pembayaran",
            description:
                "Setelah detail pemesanan disepakati, lakukan pembayaran untuk mengamankan mobil pilihan Anda. Tim kami akan mengonfirmasi dan memproses sewa Anda.",
            step: "03",
        },
    ];

    return (
        <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                        <CheckCircle className="w-4 h-4" />
                        Proses Mudah & Cepat
                    </div>
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">
                        3 Langkah Mudah Sewa Mobil di{" "}
                        <span className="text-blue-600">R-Luxe Rent</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Kami siap membantu Anda menemukan kendaraan yang tepat
                        untuk setiap kebutuhan perjalanan—baik harian, mingguan,
                        hingga bulanan. Dapatkan layanan cepat, responsif, dan
                        transparan hanya dengan beberapa langkah mudah. Hubungi
                        kami sekarang untuk mulai proses pemesanan!
                    </p>
                </div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {langkahList.map((langkah, index) => (
                        <div key={index} className="relative group">
                            {/* Step Card */}
                            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 h-full relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                                {/* Background Decoration */}
                                <div className="absolute top-0 right-0 w-20 h-20 bg-blue-50 rounded-bl-full" />

                                {/* Step Number */}
                                <div className="absolute top-6 right-6 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold">
                                    {langkah.step}
                                </div>

                                {/* Icon */}
                                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-blue-200">
                                    <langkah.icon className="w-8 h-8 text-blue-600" />
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold text-gray-800 mb-4">
                                    {langkah.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {langkah.description}
                                </p>

                                {/* Connector Line for Desktop */}
                                {index < langkahList.length - 1 && (
                                    <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 w-8 h-0.5 bg-blue-200 z-10">
                                        <div className="absolute -right-1 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-blue-400 rounded-full" />
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
                    <p className="text-gray-500 text-sm mt-4">
                        Respons cepat dalam 5 menit • Layanan 24/7
                    </p>
                </div>
            </div>
        </section>
    );
};

export default LangkahSewa;
