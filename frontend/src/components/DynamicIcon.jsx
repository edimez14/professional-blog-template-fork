import * as Icons from "lucide-react";
import { twMerge } from "tailwind-merge";

export default function DynamicIcon({ icon, className = "", size = "md" }) {
    const Icon = Icons[icon];

    const sizePx = {
        sm: 20,
        md: 24,
        lg: 32,
        xl: 36,
        xxl: 72,
    }[size] || 24;

    if (!Icon) return null;

    return (
        <Icon
            size={sizePx}
            className={twMerge(
                "text-gold stroke-[1.5] transition-colors",
                className
            )}
        />
    );
}