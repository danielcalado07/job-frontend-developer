import { InputHTMLAttributes, useId } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
};

export default function Input({
  label,
  error,
  className = "",
  id,
  disabled = false,
  ...props
}: InputProps) {
  const generatedId = useId();
  const inputId = id || generatedId;

  return (
    <div className={`flex flex-col ${className}`}>
      {label && (
        <label
          htmlFor={inputId}
          className="mb-1 text-sm font-medium text-black dark:text-white"
        >
          {label}
        </label>
      )}

      <input
        id={inputId}
        disabled={disabled}
        className={`w-full p-2 rounded-lg 
          bg-gray-300 dark:bg-gray-800 
          text-black dark:text-white
          disabled:opacity-50 disabled:cursor-not-allowed
          focus:outline-none focus:ring-2 focus:ring-blue-500 
          border ${error ? "border-red-500" : "border-gray-300"}`}
        {...props}
      />
      {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
    </div>
  );
}