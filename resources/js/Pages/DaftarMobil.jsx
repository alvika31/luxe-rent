import { Head } from "@inertiajs/react";
import CtaSection from "../Components/CtaSection";
import Footer from "../Components/Footer";
import HeaderMenu from "../Components/HeaderMenu";
import MobilList from "../Components/MobilList";

export default function DaftarMobil({ mobils }) {
    return (
        <>
            <Head title="Daftar Mobil" />
            <HeaderMenu />
            <MobilList mobils={mobils} />
            <CtaSection />
            <Footer />
        </>
    );
}
