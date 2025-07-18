
export default function Header() {
    return (
        <header className="bg-black border-b-2 border-red-600 fixed top-0 left-0 w-full z-50 shadow-md shadow-red-500/30">
            <div className="max-w-[1400px] mx-auto px-5 py-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <a
                        href="#"
                        className="text-red-600 text-2xl font-bold uppercase tracking-widest no-underline drop-shadow-[0_0_10px_rgba(255,0,0,0.5)]"
                    >
                        ENTERTAINMENT.TV
                    </a>
                    <nav>
                        <ul className="flex flex-col md:flex-row gap-4 md:gap-8 list-none text-white font-bold uppercase tracking-wide">
                            {['Home', 'Articles', 'Videos', 'Live', 'Archive'].map((item) => (
                                <li key={item}>
                                    <a
                                        href={`#${item.toLowerCase()}`}
                                        className="hover:text-red-600 hover:border hover:border-red-600 px-4 py-1 transition-all duration-300"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}
