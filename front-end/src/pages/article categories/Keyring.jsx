import Article from "../../components/Article";
import keyring from "../../assets/posusje souvenirs/Suvenir privjesak 1.png";

export default function Keyring() {
    return (
        <>
            <div className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-10 sm:py-12 md:py-16 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                        Privjesci
                    </h1>
                </div>
            </div>
            <div className="px-4 py-6 sm:py-8 md:p-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto justify-items-center sm:justify-items-stretch">
                    <div className="w-full max-w-sm sm:max-w-none">
                        <Article title="Privjesak" image={keyring} text="privjesak" price="" />
                    </div>
                    <div className="w-full max-w-sm sm:max-w-none">
                        <Article title="Privjesak" image={keyring} text="privjesak" price="" />
                    </div>
                    <div className="w-full max-w-sm sm:max-w-none">
                        <Article title="Privjesak" image={keyring} text="privjesak" price="" />
                    </div>
                    <div className="w-full max-w-sm sm:max-w-none">
                        <Article title="Privjesak" image={keyring} text="privjesak" price="" />
                    </div>
                    <div className="w-full max-w-sm sm:max-w-none">
                        <Article title="Privjesak" image={keyring} text="privjesak" price="" />
                    </div>
                    <div className="w-full max-w-sm sm:max-w-none">
                        <Article title="Privjesak" image={keyring} text="privjesak" price="" />
                    </div>
                    <div className="w-full max-w-sm sm:max-w-none">
                        <Article title="Privjesak" image={keyring} text="privjesak" price="" />
                    </div>
                    <div className="w-full max-w-sm sm:max-w-none">
                        <Article title="Privjesak" image={keyring} text="privjesak" price="" />
                    </div>
                </div>
            </div>
        </>
    );
}