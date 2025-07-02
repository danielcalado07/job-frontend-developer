import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "secondary" | "danger" | 'default';
};

export default function Button({
    children,
    disabled = false,
    variant = "primary",
    className = "",
    ...props
}: ButtonProps) {
    
    const variantStyles = {
        primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 disabled:bg-gray-500 disabled:cursor-not-allowed",
        secondary: "bg-gray-300 text-gray-800 hover:bg-gray-400 focus:ring-gray-500",
        danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
        default: "",
    };

    return (
        <button
            className={`${variantStyles[variant]} ${className}`}
            disabled={disabled}
            {...props}>
            {children}
        </button>
    );
}