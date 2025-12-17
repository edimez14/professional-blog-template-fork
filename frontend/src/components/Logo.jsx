import DynamicIcon from "./DynamicIcon";

export default function Logo() {
    return (
        <a
            href="/"
            className="flex items-center gap-3 font-sans text-xl font-bold tracking-tight text-gold group"
        >
            <DynamicIcon
                icon="BookOpen"
                className="text-gold h-7 w-7"
            />
            <span>
                Blog Profesional
            </span>
        </a>
    );
}