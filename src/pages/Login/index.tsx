import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../services/firabaseConfig";
import { useState } from "react";
import { FirebaseError } from "firebase/app";

import { Van, Eye, EyeClosed } from "lucide-react";
import { Link } from "react-router-dom";
import { GoogleButton } from "../../components/GoogleButton";

export function Login() {
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [email, setEmail] = useState("");
  async function handleForgotPassword() {
    if (!email) {
      alert("Por favor, digite seu e-mail no campo acima primeiro.");
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      alert("E-mail de redefinição enviado! Verifique sua caixa de entrada.");
    } catch (error) {
      if (error instanceof FirebaseError) {
        console.error("Erro Firebase:", error.code);
        alert("Erro ao enviar e-mail. Verifique o endereço digitado.");
      } else {
        console.error("Erro desconhecido:", error);
        alert("Ocorreu um erro inesperado.");
      }
    }
  }

  return (
    <>
      <main className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
        <div className="mb-8 flex items-center gap-3">
          <div className="bg-primary/20 backdrop-blur-md w-10 h-10 rounded-lg flex items-center justify-center border border-primary/30">
            <span className=" text-primary text-3xl">
              <Van />
            </span>
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            VanControl
          </h1>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-100">
            Bem-vindo de volta
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
            Acesse sua conta e controle suas finanças.
          </p>
        </div>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-slate-300 dark:border-border-dark"></span>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white dark:bg-surface-dark px-2 text-slate-500 dark:text-slate-400">
              ou entre com email
            </span>
          </div>
        </div>

        <div className="mb-6">
          <GoogleButton label="Entrar com Google" />
        </div>

        <form action="#" className="space-y-5" method="POST">
          <div>
            <label
              className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5"
              htmlFor="email"
            >
              E-mail
            </label>
            <input
              type="email"
              id="email"
              required={true}
              name="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-border-dark dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none text-sm placeholder:text-slate-400"
              placeholder="seu@email.com"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-slate-700 dark:text-slate-300"
              >
                Senha
              </label>
            </div>
            <div className="relative">
              <input
                type={mostrarSenha ? "text" : "password"}
                id="password"
                name="password"
                autoComplete="current-password"
                required={true}
                className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-border-dark dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none text-sm placeholder:text-slate-400"
                placeholder="••••••••"
              />
              <button
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                type="button"
                onClick={() => setMostrarSenha(!mostrarSenha)}
              >
                <span className="text-xl">
                  {mostrarSenha ? <Eye /> : <EyeClosed />}
                </span>
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                className="h-4 w-4 text-primary accent-blue-600 focus:ring-primary border-slate-300 dark:border-border-dark rounded bg-white dark:bg-slate-900 transition-colors cursor-pointer"
                id="remember-me"
                name="remember-me"
                type="checkbox"
              />
              <label
                className="ml-2 block text-sm text-slate-600 dark:text-slate-400"
                htmlFor="remember-me"
              >
                Lembrar de mim
              </label>
            </div>
            <div className="text-sm">
              <a
                className="font-medium text-primary hover:text-primary/80 transition-colors"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleForgotPassword();
                }}
              >
                Esqueceu a senha?
              </a>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 rounded-lg transition-all shadow-lg shadow-primary/20 active:scale-[0.98] cursor-pointer"
          >
            Entrar
          </button>
        </form>
        <p className="mt-10 text-center text-sm text-slate-600 dark:text-slate-400">
          Não tem uma conta?{" "}
          <Link
            className="font-bold text-primary hover:text-primary/80 transition-colors ml-1"
            to="/register"
          >
            Cadastre-se
          </Link>
        </p>
      </main>
    </>
  );
}
