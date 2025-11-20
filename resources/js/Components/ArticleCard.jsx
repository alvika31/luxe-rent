import React from "react";

const ArticleCard = ({ artikel }) => {
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
            "https://via.placeholder.com/400x200?text=Gambar+Tidak+Tersedia";
    };

    return (
        <div className="max-w-7xl rounded-lg shadow-lg bg-white overflow-hidden hover:shadow-xl transition-shadow duration-300">
            {/* Gambar Artikel */}
            <div className="relative h-48 overflow-hidden">
                <img
                    src={`/storage/${artikel.featured_image}`}
                    alt={artikel.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    onError={handleImageError}
                />
                {/* Status Badge */}
                <div
                    className={`absolute top-2 left-2 px-2 py-1 rounded-full text-xs font-semibold ${
                        artikel.status === "published"
                            ? "bg-green-500 text-white"
                            : "bg-gray-500 text-white"
                    }`}
                >
                    {artikel.status}
                </div>
            </div>

            {/* Konten Artikel */}
            <div className="p-4">
                {/* Judul */}
                <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2 hover:text-blue-600 transition-colors duration-200">
                    {artikel.title}
                </h3>

                {/* Konten Ringkas */}
                <div
                    className="text-gray-600 text-sm line-clamp-3 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: artikel.content }}
                />

                {/* Metadata */}
                <div className="flex flex-col space-y-2 text-sm text-gray-500 mt-2">
                    <div className="flex items-center">
                        <svg
                            className="w-4 h-4 mr-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                        </svg>
                        <span>Dibuat: {formatDate(artikel.created_at)}</span>
                    </div>

                    {artikel.updated_at !== artikel.created_at && (
                        <div className="flex items-center">
                            <svg
                                className="w-4 h-4 mr-1"
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
                                Diupdate: {formatDate(artikel.updated_at)}
                            </span>
                        </div>
                    )}
                </div>

                {/* Footer dengan Link */}
                <div className="mt-4 pt-4 border-t border-gray-200">
                    <a
                        href={`/artikel/${artikel.slug}`}
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
                    >
                        Baca Selengkapnya
                        <svg
                            className="w-4 h-4 ml-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ArticleCard;
