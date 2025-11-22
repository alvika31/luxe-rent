import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import { Link, usePage } from "@inertiajs/react";

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlay, setIsAutoPlay] = useState(true);
    const { appUrl } = usePage().props;

    const slides = [
        {
            id: 1,
            image: `${appUrl}/storage/hero1.png`,
            title: "R-Luxe Rent",
            description:
                "Nikmati pengalaman perjalanan yang aman, nyaman, dan tepat waktu bersama armada terbaik kami di seluruh Indonesia.",
            buttonText: "Jelajahi Koleksi",
            buttonColor: "bg-blue-600 hover:bg-blue-700",
            link: "/daftar-mobil",
        },
        {
            id: 2,
            image: `${appUrl}/storage/hero2.png`,
            title: "Layanan Sewa Mobil Terpercaya di Indonesia",
            description:
                "Mulai perjalanan Anda dengan layanan premium, armada lengkap, dan harga bersahabat dari R-Luxe Rent.",
            buttonText: "Lihat Mobil Keluarga",
            buttonColor: "bg-green-600 hover:bg-green-700",
            link: "/daftar-mobil",
        },
    ];

    // Auto play functionality
    useEffect(() => {
        if (!isAutoPlay) return;

        const interval = setInterval(() => {
            setCurrentSlide((prev) =>
                prev === slides.length - 1 ? 0 : prev + 1
            );
        }, 5000);

        return () => clearInterval(interval);
    }, [currentSlide, isAutoPlay, slides.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    const toggleAutoPlay = () => {
        setIsAutoPlay(!isAutoPlay);
    };

    return (
        <div className="relative w-full h-screen overflow-hidden group">
            {/* Slides */}
            <div className="relative w-full h-full">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                            index === currentSlide
                                ? "opacity-100 z-10"
                                : "opacity-0 z-0"
                        }`}
                    >
                        {/* Background Image dengan Overlay */}
                        <div
                            className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-blue-700"
                            style={{ backgroundImage: `url(${slide.image})` }}
                        >
                            <div className="absolute inset-0 bg-black opacity-40"></div>
                        </div>

                        {/* Content */}
                        <div className="relative z-20 flex items-center justify-center h-full">
                            <div className="text-center text-white px-4 max-w-4xl">
                                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                                    {slide.title}
                                </h1>
                                <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed">
                                    {slide.description}
                                </p>
                                <Link
                                    href={slide.link}
                                    className={`${slide.buttonColor} text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg`}
                                >
                                    {slide.buttonText}
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300 z-30 group-hover:opacity-100 opacity-0 md:opacity-70"
                aria-label="Previous slide"
            >
                <ChevronLeft className="w-6 h-6 text-black" />
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300 z-30 group-hover:opacity-100 opacity-0 md:opacity-70"
                aria-label="Next slide"
            >
                <ChevronRight className="w-6 h-6 text-black" />
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === currentSlide
                                ? "bg-white scale-125"
                                : "bg-white bg-opacity-50 hover:bg-opacity-75"
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Auto Play Toggle */}
            <button
                onClick={toggleAutoPlay}
                className="absolute top-4 right-4 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-lg transition-all duration-300 z-30"
                aria-label={isAutoPlay ? "Pause slideshow" : "Play slideshow"}
            >
                {isAutoPlay ? (
                    <Pause className="w-5 h-5 text-black" />
                ) : (
                    <Play className="w-5 h-5 text-black" />
                )}
            </button>

            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-white bg-opacity-20 z-30">
                <div
                    className="h-full bg-white transition-all duration-100 ease-linear"
                    style={{
                        width: isAutoPlay ? "100%" : "0%",
                    }}
                />
            </div>

            {/* CSS Animation untuk Progress Bar */}
            <style jsx>{`
                @keyframes progress {
                    from {
                        width: 0%;
                    }
                    to {
                        width: 100%;
                    }
                }
            `}</style>
        </div>
    );
};

export default Slider;
