import { Head } from "@inertiajs/react";
import ContactUs from "../Components/ContactUs";
import Footer from "../Components/Footer";
import HeaderMenu from "../Components/HeaderMenu";

export default function Kontak() {
    return (
        <>
            <Head title="Kontak" />
            <HeaderMenu />
            <ContactUs />
            <Footer />
        </>
    );
}
