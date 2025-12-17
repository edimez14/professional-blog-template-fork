import Logo from "./Logo";
import NavLink from "./NavLink";
import DynamicIcon from "./DynamicIcon";

export default function MobileMenu({ isOpen, onClose, navigation }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 bg-color-bg/95 backdrop-blur-sm md:hidden">
            <div className="flex items-center justify-between p-4 border-b border-color-border">
                <Logo />
                <button
                    onClick={onClose}
                    className="rounded-full p-2 transition-colors text-gold hover:bg-color-surface hover:text-color-text"
                    aria-label="Close menu"
                >
                    <DynamicIcon icon="X" size="lg" />
                </button>
            </div>

            <nav className="flex flex-col py-6 px-6 space-y-4">
                {navigation.map((item) => (
                    <NavLink
                        key={item.name}
                        href={item.href}
                        className="py-3 text-lg block border-b border-color-border/30 last:border-0"
                        onClick={onClose}
                    >
                        {item.name}
                    </NavLink>
                ))}
            </nav>
        </div>
    );
}