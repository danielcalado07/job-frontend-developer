import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "secondary" | "danger";
};

export default function Button({
    children,
    variant = "primary",
    className = "",
    ...props
}: ButtonProps) {
    const baseStyles =
        "px-4 py-2 rounded-md font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";

    const variantStyles = {
        primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
        secondary: "bg-gray-300 text-gray-800 hover:bg-gray-400 focus:ring-gray-500",
        danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
    };

    return (
        <button
            className={`${baseStyles} ${variantStyles[variant]} ${className}`}
            {...props}>
            {children}
        </button>
    );
}