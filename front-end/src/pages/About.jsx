export default function About() {
    return (
        <div>
            <section className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-10 sm:py-12 md:py-16 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                        Profil tvrtke
                    </h1>
                </div>
            </section>
            <div className="space-y-8 py-12 bg-gray-50 px-4">

                {/* Prvi red - tekst lijevo, ikona desno */}
                <div className="max-w-6xl mx-auto bg-gray-200 py-8 sm:py-12 px-6 sm:px-10 shadow-md rounded-lg">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">

                        <div className="w-full sm:w-1/2">
                            <h3 className="text-2xl font-bold mb-2">Tko smo mi?</h3>
                            <p>
                                Print Posušje 95 bavi se izradom kvalitetnih tiskarskih proizvoda
                                za poslovne korisnike, udruge i privatne kupce. Od ideje do gotovog
                                proizvoda pružamo uslugu tiska prilagođenu potrebama svakog klijenta.
                            </p>
                        </div>

                        <div>
                            {/* IKONA */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-16 md:size-20 lg:size-24 shrink-0">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
                            </svg>

                        </div>

                    </div>
                </div>


                {/* Drugi red - ikona lijevo, tekst desno */}
                <div className="max-w-6xl mx-auto bg-gray-200 py-8 sm:py-12 px-6 sm:px-10 shadow-md rounded-lg">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">

                        <div>
                            {/* IKONA */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-16 md:size-20 lg:size-24 shrink-0">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" />
                            </svg>

                        </div>

                        <div className="w-full sm:w-1/2">
                            <h3 className="text-2xl font-bold mb-2">Naše iskustvo i pristup</h3>
                            <p>
                                Dugogodišnjim iskustvom u području tiska razvili smo pristup koji
                                se temelji na kvaliteti, preciznosti i pouzdanoj usluzi.
                            </p>
                        </div>

                    </div>
                </div>


                {/* Treći red - tekst lijevo, ikona desno */}
                <div className="max-w-6xl mx-auto bg-gray-200 py-8 sm:py-12 px-6 sm:px-10 shadow-md rounded-lg">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">

                        <div className="w-full sm:w-1/2">
                            <h3 className="text-2xl font-bold mb-2">Što nudimo?</h3>
                            <p>
                                U našoj ponudi nalaze se različiti proizvodi poput promotivnog
                                materijala, poslovne galanterije, personaliziranih proizvoda i
                                tiska na tekstil.
                            </p>
                        </div>

                        <div>
                            {/* IKONA */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-16 md:size-20 lg:size-24 shrink-0">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>

                        </div>

                    </div>
                </div>

                <div className="max-w-6xl mx-auto bg-gray-200 py-8 sm:py-12 px-6 sm:px-10 shadow-md rounded-lg">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-16 md:size-20 lg:size-24 shrink-0">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>

                        </div>
                        <div className="w-full sm:w-1/2">
                            <h3 className="text-2xl font-bold mb-2">Kvaliteta kojoj vjerujemo</h3>
                            <p>
                                Kvaliteta je temelj našeg rada. Kroz pažljiv odabir materijala, preciznu izradu i posvećenost svakom detalju stvaramo proizvode kojima naši kupci mogu vjerovati.
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}