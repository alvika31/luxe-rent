import { Head } from "@inertiajs/react";
import CtaSection from "../Components/CtaSection";
import Footer from "../Components/Footer";
import HeaderMenu from "../Components/HeaderMenu";
import SingelArtikel from "../Components/SingelArtikel";

export default function ArtikelDetail({ post }) {
    console.log(post);
    return (
        <>
            <Head title={post.title} />
            <HeaderMenu />
            <SingelArtikel artikel={post} />
            <CtaSection />
            <Footer />
        </>
    );
}
