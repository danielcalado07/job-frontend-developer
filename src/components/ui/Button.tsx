import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "secondary" | "danger" | 'default';
};

export default function Button({
    children,
    variant = "primary",
    className = "",
    ...props
}: ButtonProps) {
    
    const variantStyles = {
        primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
        secondary: "bg-gray-300 text-gray-800 hover:bg-gray-400 focus:ring-gray-500",
        danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
        default: "",
    };

    return (
        <button
            className={`${variantStyles[variant]} ${className}`}
            {...props}>
            {children}
        </button>
    );
}