import { usePage } from "@inertiajs/react";
import React, { useState } from "react";

const ReservationForm = ({ mobils }) => {
    const { config } = usePage().props;
    console.log(mobils);
    const [formData, setFormData] = useState({
        namaLengkap: "",
        noWhatsapp: "",
        totalHari: 1,
        tanggalMulai: "",
        jenisKendaraan: "",
        tambahan: "",
    });

    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};

        if (!formData.namaLengkap.trim()) {
            newErrors.namaLengkap = "Nama lengkap harus diisi";
        }

        if (!formData.noWhatsapp.trim()) {
            newErrors.noWhatsapp = "Nomor WhatsApp harus diisi";
        } else if (!/^[0-9+-\s()]{10,}$/.test(formData.noWhatsapp)) {
            newErrors.noWhatsapp = "Format nomor WhatsApp tidak valid";
        }

        if (!formData.tanggalMulai) {
            newErrors.tanggalMulai = "Tanggal mulai harus dipilih";
        }

        if (!formData.jenisKendaraan) {
            newErrors.jenisKendaraan = "Jenis kendaraan harus dipilih";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));

        if (errors[name]) {
            setErrors((prev) => ({
                ...prev,
                [name]: "",
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            const cleanNumber = formData.noWhatsapp.replace(/\D/g, "");

            const message =
                `*FORM RESERVASI RENTAL KENDARAAN*%0A%0A` +
                `*DATA PEMESANAN*%0A` +
                `Nama Lengkap: ${formData.namaLengkap}%0A` +
                `No. WhatsApp: ${formData.noWhatsapp}%0A` +
                `Tanggal Mulai: ${formData.tanggalMulai}%0A` +
                `Total Hari Rental: ${formData.totalHari} hari%0A` +
                `Jenis Kendaraan: ${formData.jenisKendaraan}%0A` +
                `Keterangan Tambahan: ${
                    formData.tambahan || "Tidak ada"
                }%0A%0A` +
                `Silakan konfirmasi ketersediaan kendaraan untuk tanggal tersebut. Terima kasih!`;

            // Ganti dengan nomor WhatsApp bisnis Anda
            const whatsappUrl = `https://wa.me/${config.whatsapp}?text=${message}`;
            window.open(whatsappUrl, "_blank");
        }
    };

    const getMinDate = () => {
        const today = new Date();
        return today.toISOString().split("T")[0];
    };

    return (
        <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Header Section */}
            <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-8">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">
                        Reservasi Rental Kendaraan
                    </h1>
                    <p className="text-xl opacity-90">
                        Pesan kendaraan Anda dengan mudah dan cepat! Isi form
                        berikut dan kami akan konfirmasi via WhatsApp.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
                {/* Informasi Section */}
                <div className="lg:col-span-1 bg-gray-50 rounded-2xl p-6">
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">
                                📋 Informasi Reservasi
                            </h3>
                            <div className="space-y-3">
                                <div className="flex items-start space-x-3">
                                    <span className="text-green-600 text-xl">
                                        ✓
                                    </span>
                                    <div>
                                        <h4 className="font-semibold text-gray-800">
                                            Proses Mudah
                                        </h4>
                                        <p className="text-gray-600 text-sm">
                                            Isi form, submit, langsung terhubung
                                            ke WhatsApp
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <span className="text-green-600 text-xl">
                                        ✓
                                    </span>
                                    <div>
                                        <h4 className="font-semibold text-gray-800">
                                            Konfirmasi Cepat
                                        </h4>
                                        <p className="text-gray-600 text-sm">
                                            Respon dalam 5 menit via WhatsApp
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="border-t pt-6">
                            <h4 className="font-bold text-gray-800 mb-3">
                                📞 Butuh Bantuan?
                            </h4>
                            <div className="space-y-2 text-sm text-gray-600">
                                <p>• WhatsApp: {config.whatsapp}</p>
                                <p>• Telepon: {config.phone_number}</p>
                            </div>
                        </div>

                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                            <h4 className="font-bold text-blue-800 mb-2">
                                💡 Tips
                            </h4>
                            <p className="text-blue-700 text-sm">
                                Pastikan nomor WhatsApp aktif untuk proses
                                konfirmasi. Reservasi akan dikonfirmasi dalam
                                1x24 jam.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Form Section */}
                <div className="lg:col-span-2">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Nama Lengkap */}
                            <div className="md:col-span-2">
                                <label
                                    htmlFor="namaLengkap"
                                    className="block text-lg font-semibold text-gray-700 mb-2"
                                >
                                    👤 Nama Lengkap *
                                </label>
                                <input
                                    type="text"
                                    id="namaLengkap"
                                    name="namaLengkap"
                                    value={formData.namaLengkap}
                                    onChange={handleChange}
                                    required
                                    className={`w-full px-4 py-3 text-lg border-2 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ${
                                        errors.namaLengkap
                                            ? "border-red-500"
                                            : "border-gray-300"
                                    }`}
                                    placeholder="Masukkan nama lengkap Anda"
                                />
                                {errors.namaLengkap && (
                                    <p className="text-red-500 text-sm mt-2">
                                        {errors.namaLengkap}
                                    </p>
                                )}
                            </div>

                            {/* No WhatsApp */}
                            <div className="md:col-span-2">
                                <label
                                    htmlFor="noWhatsapp"
                                    className="block text-lg font-semibold text-gray-700 mb-2"
                                >
                                    📱 No. WhatsApp *
                                </label>
                                <input
                                    type="tel"
                                    id="noWhatsapp"
                                    name="noWhatsapp"
                                    value={formData.noWhatsapp}
                                    onChange={handleChange}
                                    required
                                    className={`w-full px-4 py-3 text-lg border-2 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ${
                                        errors.noWhatsapp
                                            ? "border-red-500"
                                            : "border-gray-300"
                                    }`}
                                    placeholder="Contoh: 628123456789"
                                />
                                {errors.noWhatsapp && (
                                    <p className="text-red-500 text-sm mt-2">
                                        {errors.noWhatsapp}
                                    </p>
                                )}
                            </div>

                            {/* Tanggal Mulai */}
                            <div>
                                <label
                                    htmlFor="tanggalMulai"
                                    className="block text-lg font-semibold text-gray-700 mb-2"
                                >
                                    📅 Tanggal Mulai *
                                </label>
                                <input
                                    type="date"
                                    id="tanggalMulai"
                                    name="tanggalMulai"
                                    value={formData.tanggalMulai}
                                    onChange={handleChange}
                                    min={getMinDate()}
                                    required
                                    className={`w-full px-4 py-3 text-lg border-2 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ${
                                        errors.tanggalMulai
                                            ? "border-red-500"
                                            : "border-gray-300"
                                    }`}
                                />
                                {errors.tanggalMulai && (
                                    <p className="text-red-500 text-sm mt-2">
                                        {errors.tanggalMulai}
                                    </p>
                                )}
                            </div>

                            {/* Total Hari Rental */}
                            <div>
                                <label
                                    htmlFor="totalHari"
                                    className="block text-lg font-semibold text-gray-700 mb-2"
                                >
                                    ⏰ Total Hari Rental *
                                </label>
                                <select
                                    id="totalHari"
                                    name="totalHari"
                                    value={formData.totalHari}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                                >
                                    {[...Array(30)].map((_, i) => (
                                        <option key={i + 1} value={i + 1}>
                                            {i + 1} hari
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Jenis Kendaraan */}
                            <div className="md:col-span-2">
                                <label
                                    htmlFor="jenisKendaraan"
                                    className="block text-lg font-semibold text-gray-700 mb-2"
                                >
                                    🚗 Jenis Kendaraan *
                                </label>
                                <select
                                    id="jenisKendaraan"
                                    name="jenisKendaraan"
                                    value={formData.jenisKendaraan}
                                    onChange={handleChange}
                                    required
                                    className={`w-full px-4 py-3 text-lg border-2 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ${
                                        errors.jenisKendaraan
                                            ? "border-red-500"
                                            : "border-gray-300"
                                    }`}
                                >
                                    <option value="">
                                        Pilih Jenis Kendaraan
                                    </option>
                                    {mobils.map((mobil) => (
                                        <option value={mobil.nama}>
                                            {mobil.nama}
                                        </option>
                                    ))}
                                </select>
                                {errors.jenisKendaraan && (
                                    <p className="text-red-500 text-sm mt-2">
                                        {errors.jenisKendaraan}
                                    </p>
                                )}
                            </div>

                            {/* Keterangan Tambahan */}
                            <div className="md:col-span-2">
                                <label
                                    htmlFor="tambahan"
                                    className="block text-lg font-semibold text-gray-700 mb-2"
                                >
                                    📝 Keterangan Tambahan
                                </label>
                                <textarea
                                    id="tambahan"
                                    name="tambahan"
                                    value={formData.tambahan}
                                    onChange={handleChange}
                                    rows="3"
                                    className="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                                    placeholder="Tambahan seperti request helm, jemput antar, dll..."
                                />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-4 px-6 rounded-xl hover:from-green-700 hover:to-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 transition duration-300 font-bold text-xl shadow-lg hover:shadow-xl"
                        >
                            <span className="flex items-center justify-center">
                                <svg
                                    className="w-6 h-6 mr-3"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893c0-3.189-1.248-6.189-3.515-8.444" />
                                </svg>
                                PESAN VIA WHATSAPP SEKARANG
                            </span>
                        </button>

                        <div className="text-center text-gray-500 text-sm">
                            Dengan mengisi form ini, Anda menyetujui syarat dan
                            ketentuan yang berlaku
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ReservationForm;
