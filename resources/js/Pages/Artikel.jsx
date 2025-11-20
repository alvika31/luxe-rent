import { Head } from "@inertiajs/react";
import ArticleCard from "../Components/ArticleCard";
import CtaSection from "../Components/CtaSection";
import Footer from "../Components/Footer";
import HeaderMenu from "../Components/HeaderMenu";

export default function Artikel({ artikels }) {
    console.log(artikels);
    return (
        <>
            <Head title="Artikel" />
            <HeaderMenu />
            <div className="max-w-7xl mx-auto py-24">
                <h1 className="text-3xl font-bold mb-6">Artikel Terbaru</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {artikels.map((artikel) => (
                        <ArticleCard artikel={artikel} key={artikel.id} />
                    ))}
                </div>
            </div>

            <Footer />
        </>
    );
}
