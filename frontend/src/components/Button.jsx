import { twMerge } from "tailwind-merge";
import clsx from "clsx";

export default function Button({
    children,
    className,
    loading = false,
    variant = "default",
    ...props
}) {
    const baseStyles =
        "relative inline-flex items-center justify-center rounded-lg font-medium focus:outline-none disabled:opacity-50 disabled:pointer-events-none transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]";

    const variantStyles = {
        // Texto oscuro sobre dorado para contraste y elegancia
        default:
            "bg-gold text-color-bg px-4 py-2 shadow-md hover:bg-gold/90",
        // Borde dorado, texto dorado, hover llena el botón
        outline:
            "border border-gold text-gold bg-transparent px-4 py-2 hover:bg-gold hover:text-color-bg",
        // Texto claro, hover se vuelve dorado
        ghost:
            "bg-transparent text-color-text hover:text-gold px-4 py-2",
        // Iconos
        icon:
            "p-2 rounded-full bg-color-surface text-gold hover:bg-gold hover:text-color-bg",
        "icon-outline":
            "p-2 rounded-full border border-gold text-gold bg-transparent hover:bg-gold hover:text-color-bg",
        "icon-ghost":
            "p-2 rounded-full bg-transparent text-gold hover:bg-color-surface",
        // Texto + Icono
        "text-icon":
            "flex items-center gap-2 bg-gold text-color-bg px-4 py-2 shadow-md hover:bg-gold/90",
        "text-icon-outline":
            "flex items-center gap-2 border border-gold text-gold bg-transparent px-4 py-2 hover:bg-gold hover:text-color-bg",
        "text-icon-ghost":
            "flex items-center gap-2 bg-transparent text-color-text hover:text-gold px-4 py-2",
    };

    return (
        <button
            className={twMerge(clsx(baseStyles, variantStyles[variant], className))}
            {...props}
        >
            {loading && (
                <span className="absolute inset-0 flex items-center justify-center">
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-color-bg border-t-transparent" />
                </span>
            )}
            <span className={clsx(loading && "opacity-0")}>{children}</span>
        </button>
    );
}