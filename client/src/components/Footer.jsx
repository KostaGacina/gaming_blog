import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <footer className="bg-black border-t-2 border-red-600 w-full shadow-md shadow-red-500/30 fixed bottom-0 left-0 z-50">
            <div className="max-w-[1400px] mx-auto px-5 py-4">
                <div className="flex justify-center items-center">
                    <p className="text-white text-center text-base font-bold uppercase tracking-wide">
                        &copy; 2025 ENTERTAINMENT.TV • ALL RIGHTS RESERVED •  <FontAwesomeIcon icon={faInstagram} size='lg' />
                    </p>
                </div>
            </div>
        </footer>
    )
}