import { useState  } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';


export interface Route{
    href: string;
    text: string;
}
const Navbar = () => {
    const { pathname }:any = useLocation();
    //@ts-ignore
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { href: '/', text: 'Home' },
        { href: '/generate', text: 'Generate' },
        { href: '/templates', text: 'Templates' },
        { href: '/analytics', text: 'Analytics' }
    ];

    return (
        <nav className="bg-black text-white py-6 px-6 fixed w-full top-0 z-50">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between">
                    <Link to={"/"} className="flex items-center space-x-2">
                        <Sparkles className="text-sky-300" />
                        <span className="font-signika text-2xl font-bold">BioGenerator</span>
                    </Link>

                    <div className="hidden md:flex space-x-8 font-['Heebo']">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                to={link.href}
                                className={`hover:text-sky-300 transition-colors ${pathname === link.href ? 'text-sky-300' : ''
                                    }`}
                            >
                                {link.text}
                            </Link>
                        ))}
                    </div>

                    <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {isOpen && (
                    <div className="md:hidden mt-4 font-['Heebo']">
                        <div className="flex flex-col space-y-4">
                            {links.map(link => (
                                <Link
                                    key={link.href}
                                    to={link.href}
                                    className={`hover:text-sky-300 transition-colors ${pathname === link.href ? 'text-sky-300' : ''
                                        }`}
                                    onClick={() => setIsOpen(!isOpen)}
                                >
                                    {link.text}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;