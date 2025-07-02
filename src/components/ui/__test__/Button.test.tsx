import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../Button";

describe("Button", () => {
    it("renders with text", () => {
        render(<Button>Click Me</Button>);
        expect(screen.getByText("Click Me")).toBeInTheDocument();
    });

    it("renders with custom className", () => {
        render(<Button className="custom-class">Click Me</Button>);
        expect(screen.getByText("Click Me")).toHaveClass("custom-class");
    });

    it("calls onClick handler when clicked", () => {
        const handleClick = jest.fn();
        render(<Button onClick={handleClick}>Click Me</Button>);

        fireEvent.click(screen.getByText("Click Me"));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it("is disabled when disabled prop is true", () => {
        render(<Button disabled>Disabled Button</Button>);
        const button = screen.getByText("Disabled Button");

        expect(button).toBeDisabled();
    });
});

