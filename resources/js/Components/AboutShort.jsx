import React from "react";

const AboutShort = () => {
    return (
        <div className="bg-gray-50 py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                        {/* Bagian Kiri - Foto Team */}
                        <div className="md:w-1/2">
                            <div className="h-full w-full">
                                <img
                                    src="/storage/about.jpg" // Ganti dengan path gambar team Anda
                                    alt="R-Luxe Rent Professional Team"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Bagian Kanan - Konten */}
                        <div className="md:w-1/2 p-8 md:p-12">
                            <div className="space-y-6">
                                {/* Judul */}
                                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                                    Tentang{" "}
                                    <span className="text-blue-600">
                                        R-Luxe Rent
                                    </span>
                                </h1>

                                {/* Paragraf 1 */}
                                <div className="space-y-4">
                                    <p className="text-lg text-gray-700 leading-relaxed">
                                        <span className="font-semibold text-blue-600">
                                            R-Luxe Rent
                                        </span>{" "}
                                        adalah penyedia rental mobil Bandung
                                        murah yang menawarkan pilihan kendaraan
                                        paling lengkap dan berkualitas di Kota
                                        Bandung. Sebagai salah satu layanan
                                        rental mobil terpercaya, kami
                                        menyediakan berbagai jenis mobil mulai
                                        dari Camry, Mercy, New Fortuner VRZ, New
                                        Pajero, dan banyak pilihan lainnya
                                        sesuai kebutuhan perjalanan Anda.
                                    </p>
                                </div>

                                {/* Paragraf 2 */}
                                <div className="space-y-4">
                                    <p className="text-lg text-gray-700 leading-relaxed">
                                        Layanan kami sudah digunakan oleh banyak
                                        pelanggan di wilayah Bandung,
                                        sekitarnya, hingga berbagai daerah di
                                        Jawa Barat dan Jakarta. Dengan dukungan
                                        tim profesional yang siap membantu
                                        selama 24 jam penuh, kami berkomitmen
                                        memberikan pengalaman sewa mobil yang
                                        nyaman, aman, dan memuaskan.
                                    </p>
                                </div>

                                {/* Highlight Features */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                                    <div className="flex items-center space-x-2">
                                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                        <span className="text-gray-700">
                                            Kendaraan Berkualitas
                                        </span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                        <span className="text-gray-700">
                                            Layanan 24 Jam
                                        </span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                        <span className="text-gray-700">
                                            Wilayah Luas
                                        </span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                        <span className="text-gray-700">
                                            Harga Terjangkau
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutShort;
