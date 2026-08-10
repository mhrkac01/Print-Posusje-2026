import ContactForm from "../components/ContactForm"

export default function Contact() {
    return (
        <div className="bg-gray-50">
            <section className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-10 sm:py-12 md:py-16 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                        Kontakt
                    </h1>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        Imate pitanje? Pošaljite nam poruku.
                    </p>
                </div>
            </section>
            {/*<ContactForm />*/}

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-12 px-4">
                <div className="h-[280px] sm:h-[350px] md:h-[400px] rounded-lg overflow-hidden shadow-lg">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2759.718930199229!2d17.325307876001915!3d43.472228471111244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134b271afd1687d1%3A0x3ef86b8dbc6cbd99!2sFra%20Grge%20Marti%C4%87a%2021%2C%20Posu%C5%A1je%2088240%2C%20Bosnia%20and%20Herzegovina!5e1!3m2!1sen!2shr!4v1783774753927!5m2!1sen!2shr"
                        className="w-full h-full"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="strict-origin-when-cross-origin"
                        title="Google Maps - Print Posušje"
                    />
                </div>

                <div className="flex flex-col justify-center text-center">
                    <h2 className="text-3xl font-bold mb-4">
                        Podaci za kontakt
                    </h2>

                    <p>📍 Fra Grge Martića 21</p>
                    <p>88240 Posušje</p>
                    <p>Bosna i Hercegovina</p>

                    <p className="mt-4">📞 +387 63 354 442</p>
                    <p>✉️ printposusje@gmail.com</p>
                </div>
            </div>
        </div>
    );
}