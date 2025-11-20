import { useState } from "react";
import HeaderMenu from "../Components/HeaderMenu";
import Slider from "../Components/Slider";
import CardRentalService from "../Components/CardRentalService";
import AboutShort from "../Components/AboutShort";
import MobilList from "../Components/MobilList";
import LangkahSewa from "../Components/LangkahSewa";
import CtaSection from "../Components/CtaSection";
import Footer from "../Components/Footer";
import { Head } from "@inertiajs/react";

export default function Home({ mobils }) {
    return (
        <>
            <Head title="Home" />
            <HeaderMenu />
            <Slider />
            <CardRentalService />
            <AboutShort />
            <MobilList mobils={mobils} />
            <LangkahSewa />
            <CtaSection />
            <Footer />
        </>
    );
}
