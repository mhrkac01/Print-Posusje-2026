// src/pages/Contact.jsx (NO IMPORTS except React)
import { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [status, setStatus] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) {
            setStatus("Molimo ispunite sva polja.");
            return;
        }

        setLoading(true);
        setStatus("Slanje u tijeku...");

        try {
            const payload = {
                ...formData,
                subject: formData.subject.trim() || "Upit s web stranice"
            };

            const response = await fetch("http://localhost:5000/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus("Poruka je uspješno poslana!");
                setFormData({ name: "", email: "", subject: "", message: "" });
            } else {
                const errMsg = data.errors ? data.errors.map(err => err.msg).join(", ") : (data.error || "Došlo je do pogreške.");
                setStatus(`Greška: ${errMsg}`);
            }
        } catch (error) {
            console.error("Greška pri slanju:", error);
            setStatus("Došlo je do greške pri povezivanju s poslužiteljem. Pokušajte ponovno.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {/* Contact Form - directly in this file */}
            <div className="py-12 px-4 flex justify-center">
                <div className="max-w-2xl w-full bg-white shadow-xl rounded-xl p-8 md:p-10">
                    <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
                        Pošaljite poruku
                    </h2>

                    {status && (
                        <div className={`mb-4 p-3 rounded text-center ${status.includes("uspješno") || status.includes("poslana")
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                            }`}>
                            {status}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Ime *</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                placeholder="Vaše ime"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email *</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                placeholder="vaš@email.com"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Naslov</label>
                            <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                placeholder="Upit o tisku..."
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Poruka *</label>
                            <textarea
                                name="message"
                                rows="4"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                placeholder="Opišite što trebate..."
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition ${loading ? "opacity-50 cursor-not-allowed" : ""
                                }`}
                        >
                            {loading ? "Slanje..." : "Pošalji poruku"}
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}