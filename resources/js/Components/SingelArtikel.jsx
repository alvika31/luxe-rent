import React from "react";

const SingelArtikel = ({ artikel }) => {
    // Format tanggal menjadi lebih readable
    const formatDate = (dateString) => {
        const options = {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        };
        return new Date(dateString).toLocaleDateString("id-ID", options);
    };

    // Handle image error
    const handleImageError = (e) => {
        e.target.src =
            "https://via.placeholder.com/800x400/4F46E5/FFFFFF?text=Gambar+Tidak+Tersedia";
    };

    // Cek apakah artikel ada
    if (!artikel) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                    <p className="text-gray-600">Memuat artikel...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Card Container */}
                <article className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    {/* Header dengan Gambar */}
                    <div className="relative">
                        {/* Gambar Featured */}
                        <div className="h-96 overflow-hidden">
                            <img
                                src={`/storage/${artikel.featured_image}`}
                                alt={artikel.title}
                                className="w-full h-full object-cover"
                                onError={handleImageError}
                            />
                        </div>

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                        {/* Content di atas gambar */}
                        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                            {/* Status Badge */}
                            <div
                                className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-4 ${
                                    artikel.status === "published"
                                        ? "bg-green-500 text-white"
                                        : "bg-yellow-500 text-white"
                                }`}
                            >
                                <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                                {artikel.status === "published"
                                    ? "Published"
                                    : "Draft"}
                            </div>

                            {/* Judul Artikel */}
                            <h1 className="text-4xl font-bold mb-4 leading-tight">
                                {artikel.title}
                            </h1>

                            {/* Metadata */}
                            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-200">
                                <div className="flex items-center">
                                    <svg
                                        className="w-4 h-4 mr-2"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                    <span>
                                        Dibuat: {formatDate(artikel.created_at)}
                                    </span>
                                </div>

                                {artikel.updated_at !== artikel.created_at && (
                                    <div className="flex items-center">
                                        <svg
                                            className="w-4 h-4 mr-2"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                                            />
                                        </svg>
                                        <span>
                                            Diupdate:{" "}
                                            {formatDate(artikel.updated_at)}
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Konten Artikel */}
                    <div className="p-8">
                        {/* Breadcrumb */}
                        <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
                            <a
                                href="/"
                                className="hover:text-blue-600 transition-colors"
                            >
                                Home
                            </a>
                            <span>/</span>
                            <a
                                href="/artikel"
                                className="hover:text-blue-600 transition-colors"
                            >
                                Artikel
                            </a>
                            <span>/</span>
                            <span className="text-gray-700 font-medium">
                                {artikel.title}
                            </span>
                        </nav>

                        {/* Konten */}
                        <div className="prose prose-lg max-w-none">
                            <div className="text-gray-700 leading-relaxed text-lg">
                                {artikel.content ? (
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: artikel.content,
                                        }}
                                    />
                                ) : (
                                    <div className="text-center py-8">
                                        <svg
                                            className="w-16 h-16 text-gray-300 mx-auto mb-4"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={1}
                                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                            />
                                        </svg>
                                        <p className="text-gray-500">
                                            Tidak ada konten untuk ditampilkan
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Tags dan Share (opsional) */}
                        <div className="mt-8 pt-6 border-t border-gray-200">
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                                {/* Tags */}
                                <div className="flex items-center flex-wrap gap-2">
                                    <span className="text-sm font-medium text-gray-700">
                                        Tags:
                                    </span>
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-blue-100 text-blue-800">
                                        #{artikel.slug}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    );
};

export default SingelArtikel;
