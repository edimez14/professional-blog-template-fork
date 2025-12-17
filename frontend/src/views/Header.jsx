import { useState } from "react";
import Logo from "../components/Logo";
import NavLink from "../components/NavLink";
import MobileMenu from "../components/MobileMenu";
import DynamicIcon from "../components/DynamicIcon";
import Button from "../components/Button";

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navigation = [
        { name: "Inicio", href: "/" },
        { name: "Publicaciones", href: "#" },
        { name: "Sobre mi", href: "#" },
    ];

    return (
        <>
            <div className="sticky top-4 z-50 px-4 shadow-[0_8px_12px_-8px_rgba(0,0,0,0.35)] pb-4">
                <div className="flex h-8 items-center justify-between">
                    <Logo />
                    <div className="flex">
                        <nav className="hidden md:flex items-end space-x-1">
                            {navigation.map((item) => (
                                <NavLink key={item.name} href={item.href}>
                                    {item.name}
                                </NavLink>
                            ))}
                        </nav>
                        <Button className="md:ml-6">Suscribirse</Button>
                    </div>
                    <button
                        onClick={() => setMobileMenuOpen(true)}
                        className="md:hidden rounded-full p-2 text-amber-700 dark:text-amber-300 hover:bg-amber-100/50 dark:hover:bg-amber-950/30"
                        aria-label="Open menu"
                    >
                        <DynamicIcon icon="Menu" />
                    </button>
                </div>
            </div>

            <MobileMenu
                isOpen={mobileMenuOpen}
                onClose={() => setMobileMenuOpen(false)}
                navigation={navigation}
            />
        </>
    )
}