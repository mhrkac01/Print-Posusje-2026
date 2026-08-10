export default function Card({ title, content, path, alt = title }) {
    return (
        <div className="relative max-w-sm mx-auto group rounded-2xl overflow-hidden shadow-lg">
            <img src={path} alt={alt} className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white drop-shadow-lg">{title}</h3>
                <p className="text-gray-200 text-sm mt-1 opacity-90 group-hover:opacity-100 transition-opacity">
                    {content}
                </p>
            </div>
        </div>
    );
}