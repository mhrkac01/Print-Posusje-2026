import ImageSlider from "../components/ImageSlider";
import Card from "../components/Card";
import posusje_dres1 from "../assets/posusje souvenirs/Suvenir majica 1.png";
import posusje_dres2 from "../assets/posusje souvenirs/Suvenir majica 2.png";
import poster from "../assets/images/pricest.png";
import upaljac from "../assets/images/upaljac.png";
import mug from "../assets/posusje souvenirs/Suvenir šalica 1.png";
import sticker from "../assets/images/sticker.png";
import salicaCartica from "../assets/images/salicaCartica.webp";
import letakCard from "../assets/images/letakCard.jpg";
import vizitkaCard from "../assets/images/visitCardCardpng.png";
import kemijska from "../assets/images/kemijska olovka.png";
import { Slide } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css';
import { Link } from "react-router-dom";

const slides = [
    { url: posusje_dres1, title: "Tisak na tekstil" },
    { url: poster, title: "Posteri i plakati" },
    { url: upaljac, title: "Promotivni materijali" },
    { url: mug, title: "Personalizirane šalice" },
];

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-10 sm:py-12 md:py-16 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                        Print Posušje 95
                    </h1>
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-light mb-6">
                        Profesionalne usluge tiska za vaše poslovne i osobne potrebe
                    </h2>
                    <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                        📍 Fra Grge Martića 21, Posušje 88240, Bosna i Hercegovina
                    </p>
                </div>
            </section>

            {/* Image Slider - Responsive */}
            <section className="max-w-3xl mx-auto px-4 py-12">
                <div className="rounded-xl overflow-hidden shadow-2xl">
                    <Slide>
                        {slides.map((slide, index) => (
                            <div key={index} className="h-56 sm:h-72 md:h-96 lg:h-[500px]">
                                <img
                                    src={slide.url}
                                    alt={slide.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                    </Slide>
                </div>
            </section>

            {/* Services Section */}
            <section className="max-w-7xl mx-auto px-4 py-12">
                <div className="text-center mb-12">
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        Naše Usluge
                    </h3>
                    <div className="w-24 h-1 bg-gray-800 mx-auto mb-6"></div>
                    <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Bavimo se profesionalnim tiskom za poslovne i privatne potrebe.
                        Nudimo izradu majica, šalica, letaka, plakata, vizitki, naljepnica,
                        personaliziranih poklona i mnogih drugih proizvoda po vašoj želji.
                        Naša tiskara kombinira kvalitetne materijale, moderan dizajn i
                        brzu izradu kako bismo vašim idejama dali stvarni oblik.
                    </p>
                </div>

                {/* Cards Grid - Responsive */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 justify-items-center sm:justify-items-stretch">
                    <div className="w-full max-w-sm sm:max-w-none">
                        <Card
                            title="Printanje"
                            content="Printanje i uvezivanje"
                            path={poster}
                        />
                    </div>
                    <div className="w-full max-w-sm sm:max-w-none">
                        <Card
                            title="Tisak na tekstil"
                            content="Majice, dukserice i sportska oprema"
                            path={posusje_dres1}
                        />
                    </div>
                    <div className="w-full max-w-sm sm:max-w-none">
                        <Card
                            title="Marketinški tisak"
                            content="Upaljači, kemijske olovke, letci, vizitke"
                            path={kemijska}
                        />
                    </div>
                    <div className="w-full max-w-sm sm:max-w-none">
                        <Card
                            title="Naljepnice"
                            content="Profesionalne naljepnice i etikete za poslovne i promosne svrhe"
                            path={sticker}
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}