import React from "react";
import {
    Car,
    Calendar,
    Clock,
    CalendarDays,
    BadgeCheck,
    ImageOff,
} from "lucide-react";
import { usePage } from "@inertiajs/react";

const MobilCard = ({ mobil }) => {
    const { config } = usePage().props;
    // Format tanggal created_at menjadi lebih readable
    const formatTanggal = (tanggal) => {
        return new Date(tanggal).toLocaleDateString("id-ID", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    };

    // Format harga ke Rupiah
    const formatHarga = (harga) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
        }).format(harga);
    };

    return (
        <div className="bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 hover:border-blue-300 hover:-translate-y-1">
            {/* Gambar Mobil */}
            <div className="h-48 bg-gray-100 flex items-center justify-center relative rounded-t-xl overflow-hidden">
                {mobil.image ? (
                    <img
                        src={`/storage/${mobil.image}`}
                        alt={mobil.nama}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                ) : (
                    <div className="text-gray-300 flex flex-col items-center">
                        <ImageOff className="w-12 h-12 mb-2" />
                        <span className="text-sm">No Image</span>
                    </div>
                )}

                {/* Status Active */}
                <div
                    className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 backdrop-blur-sm ${
                        mobil.is_active
                            ? "bg-green-500/90 text-white"
                            : "bg-red-500/90 text-white"
                    }`}
                >
                    <BadgeCheck className="w-3 h-3" />
                    {mobil.is_active ? "Active" : "Inactive"}
                </div>
            </div>

            {/* Content */}
            <div className="p-5">
                {/* Nama Mobil */}
                <div className="flex items-center gap-2 mb-3">
                    <Car className="w-5 h-5 text-blue-600" />
                    <h3 className="text-lg font-bold text-gray-800 line-clamp-1">
                        {mobil.nama}
                    </h3>
                </div>

                {/* Deskripsi */}
                <div className="mb-4">
                    <div
                        className="text-gray-600 text-sm line-clamp-3 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: mobil.deskripsi }}
                    />
                </div>

                {/* Support Options */}
                <div className="flex items-center gap-3 mb-4 text-sm flex-wrap">
                    {mobil.support_harian && (
                        <div className="flex items-center gap-1 bg-green-50 text-green-700 px-2 py-1 rounded-lg">
                            <Clock className="w-3 h-3" />
                            <span className="text-xs font-medium">Harian</span>
                        </div>
                    )}
                    {mobil.support_mingguan && (
                        <div className="flex items-center gap-1 bg-blue-50 text-blue-700 px-2 py-1 rounded-lg">
                            <Calendar className="w-3 h-3" />
                            <span className="text-xs font-medium">
                                Mingguan
                            </span>
                        </div>
                    )}
                    {mobil.support_bulanan && (
                        <div className="flex items-center gap-1 bg-purple-50 text-purple-700 px-2 py-1 rounded-lg">
                            <CalendarDays className="w-3 h-3" />
                            <span className="text-xs font-medium">Bulanan</span>
                        </div>
                    )}
                </div>

                {/* Harga */}
                <div className="border-t border-gray-100 pt-3">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-xs text-gray-500 font-medium">
                                Harga Mulai
                            </p>
                            <p className="text-lg font-bold text-blue-600">
                                {formatHarga(mobil.harga)}
                            </p>
                        </div>
                        <a
                            href={`https://wa.me/${config.whatsapp}?text=Hallo R-Luxe Rent, saya ingin menyewa mobil ${mobil.nama}. Mohon informasinya.`}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Sewa Sekarang
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Komponen untuk menampilkan list mobil
const MobilList = ({ mobils }) => {
    if (!mobils || mobils.length === 0) {
        return (
            <div className="text-center py-16 bg-gray-50 rounded-xl">
                <Car className="w-20 h-20 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-500 mb-2">
                    Tidak ada data mobil
                </h3>
                <p className="text-gray-400 text-sm">
                    Silakan tambahkan mobil terlebih dahulu
                </p>
            </div>
        );
    }

    return (
        <div className="max-w-7xl py-24 mx-auto">
            {/* Title Section */}
            <div className="mb-8 text-center">
                <h1 className="text-3xl font-bold text-gray-800 mb-3">
                    List Mobil Rental
                </h1>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Temukan mobil terbaik untuk kebutuhan perjalanan Anda dengan
                    berbagai pilihan rental yang fleksibel
                </p>
            </div>

            {/* Grid Mobil */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {mobils.map((mobil) => (
                    <MobilCard key={mobil.id} mobil={mobil} />
                ))}
            </div>
        </div>
    );
};

export default MobilList;
