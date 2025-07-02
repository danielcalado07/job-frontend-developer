import { render, screen, fireEvent } from "@testing-library/react";
import Input from "../Input";

describe("Input", () => {
  it("renderiza com label e placeholder", () => {
    render(<Input label="Nome" placeholder="Digite seu nome" />);
    
    expect(screen.getByLabelText("Nome")).toBeInTheDocument();

    expect(screen.getByPlaceholderText("Digite seu nome")).toBeInTheDocument();
  });

  it("aceita texto digitado", () => {
    render(<Input placeholder="Seu nome" />);
    
    const input = screen.getByPlaceholderText("Seu nome");
    fireEvent.change(input, { target: { value: "Daniel" } });
    
    expect(input).toHaveValue("Daniel");
  });

  it("exibe mensagem de erro quando informada", () => {
    render(<Input label="Email" error="Campo obrigatório" />);
    
    expect(screen.getByText("Campo obrigatório")).toBeInTheDocument();
  });

  it("dispara evento de tecla pressionada", () => {
    const handleKeyDown = jest.fn();
    render(<Input placeholder="Mensagem" onKeyDown={handleKeyDown} />);

    const input = screen.getByPlaceholderText("Mensagem");
    fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

    expect(handleKeyDown).toHaveBeenCalledTimes(1);
  });
});
