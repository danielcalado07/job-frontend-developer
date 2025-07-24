"use client";
import { useState } from "react";
import { useModaisContext } from "@/context/modalContext";
import bcrypt from "bcryptjs";

export default function ModalLogin() {
  const { modalLogin, setModalLogin } = useModaisContext();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [showSenha, setShowSenha] = useState(false);

  if (!modalLogin) return null;

  const handleClose = () => {
    setEmail("");
    setSenha("");
    setMensagem("");
    setModalLogin(false);
  };

  const getUsuarios = (): Record<string, string> => {
    const data = localStorage.getItem("usuarios");
    return data ? JSON.parse(data) : {};
  };

  const salvarUsuario = (email: string, senhaCriptografada: string) => {
    const usuarios = getUsuarios();
    usuarios[email] = senhaCriptografada;
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const usuarios = getUsuarios();
    const senhaSalva = usuarios[email];

    const senhaCorreta = await bcrypt.compare(senha, senhaSalva);

    if (senhaCorreta) {
      setMensagem("Login bem-sucedido!");
      setTimeout(handleClose, 1500);
    } else {
      setMensagem("Senha ou úsuario incorreta");
    }
  };

  const handleCadastro = async (e: React.FormEvent) => {
    e.preventDefault();
    const usuarios = getUsuarios();

    if (usuarios[email]) {
      return setMensagem("Usuário já cadastrado");
    }

    const salt = await bcrypt.genSalt(10);
    const senhaCriptografada = await bcrypt.hash(senha, salt);

    salvarUsuario(email, senhaCriptografada);
    setMensagem("Cadastro realizado com sucesso!");
    setTimeout(() => {
      setIsLogin(true);
      setMensagem("");
      setEmail("");
      setSenha("");
    }, 1500);
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center">
      <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-md w-full max-w-md relative">
        <button
          onClick={handleClose}
          className="absolute top-2 right-3 text-2xl text-white hover:text-black"
          aria-label="Fechar modal"
        >
          &times;
        </button>

        <h2 className="text-xl text-white font-bold mb-4">
          {isLogin ? "Login" : "Cadastro"}
        </h2>

        <div className="flex justify-between mb-4">
          <button
            className={`w-1/2 py-2 rounded-l-md ${
              isLogin ? "bg-blue-600 text-white" : "bg-gray-300 text-black"
            }`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={`w-1/2 py-2 rounded-r-md ${
              !isLogin ? "bg-blue-600 text-white" : "bg-gray-300 text-black"
            }`}
            onClick={() => setIsLogin(false)}
          >
            Cadastrar
          </button>
        </div>

        <form
          onSubmit={isLogin ? handleLogin : handleCadastro}
          className="space-y-4"
        >
          <div>
            <label
              htmlFor="email"
              className="block text-sm text-white font-medium"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full mt-1 px-3 py-2 border rounded-md dark:bg-gray-300 dark:text-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label
              htmlFor="senha"
              className="block text-white text-sm font-medium"
            >
              Senha
            </label>
            <div className="relative">
              <input
                id="senha"
                type={showSenha ? "text" : "password"}
                className="w-full mt-1 px-3 py-2 pr-10 border rounded-md"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={() => setShowSenha(!showSenha)}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600"
                aria-label={showSenha ? "Ocultar senha" : "Mostrar senha"}
              >
                {showSenha ? "🙈" : "👁️"}
              </button>
            </div>
          </div>

          {mensagem && (
            <p className="text-sm text-yellow-300 text-center">{mensagem}</p>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
          >
            {isLogin ? "Entrar" : "Cadastrar"}
          </button>
        </form>
      </div>
    </div>
  );
}
