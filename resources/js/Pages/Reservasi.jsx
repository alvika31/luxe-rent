import { Head } from "@inertiajs/react";
import CtaSection from "../Components/CtaSection";
import Footer from "../Components/Footer";
import HeaderMenu from "../Components/HeaderMenu";
import ReservationForm from "../Components/ReservationForm";

export default function Reservasi({ mobils }) {
    return (
        <>
            <Head title="Reservasi" />
            <HeaderMenu />
            <div className="my-24">
                <ReservationForm mobils={mobils} />
            </div>
            <CtaSection />
            <Footer />
        </>
    );
}
