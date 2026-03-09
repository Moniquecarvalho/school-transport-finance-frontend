import { User, Mail, LockKeyhole, Shield } from "lucide-react";
import { GoogleButton } from "../../components/GoogleButton";
import { Link } from "react-router-dom";

export function Register() {
  return (
    <main className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
      <div className="mb-8">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          Crie sua conta
        </h2>
        <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
          Gestão lucrativa para transportadores.
        </p>
      </div>

      <div className="mb-6">
        <GoogleButton label="Cadastrar com Google" />
      </div>

      <div className="relative my-8">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-slate-300 dark:border-border-dark"></span>
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-white dark:bg-surface-dark px-2 text-slate-500 dark:text-slate-400">
            ou e-mail
          </span>
        </div>
      </div>

      <form action="#" className="space-y-5" method="POST">
        <div>
          <label
            className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5"
            htmlFor="name"
          >
            Nome Completo
          </label>
          <div className="relative">
            <div className="absolute left-2 top-1/2 -translate-y-1/2 text-slate-400">
              <User size={18} />
            </div>

            <input
              type="text"
              id="name"
              required={true}
              name="name"
              autoComplete="name"
              className="w-full py-3 pl-8 rounded-lg border border-slate-300 dark:border-border-dark dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none text-sm placeholder:text-slate-400"
              placeholder="Digite seu nome"
            />
          </div>
        </div>

        <div>
          <label
            className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5"
            htmlFor="email"
          >
            E-mail
          </label>
          <div className="relative">
            <div className="absolute left-2 top-1/2 -translate-y-1/2 text-slate-400">
              <Mail size={18} />
            </div>
            <input
              type="email"
              id="email"
              required={true}
              name="email"
              autoComplete="email"
              className="w-full py-3 pl-8 rounded-lg border border-slate-300 dark:border-border-dark dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none text-sm placeholder:text-slate-400"
              placeholder="seu@email.com"
            />
          </div>
        </div>

        <div>
          <div className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5"
            >
              Senha
            </label>
            <div className="relative">
              <div className="absolute left-2 top-1/2 -translate-y-1/2 text-slate-400">
                <LockKeyhole size={18} />
              </div>
              <input
                id="password"
                name="password"
                autoComplete="current-password"
                required={true}
                className="w-full py-3 pl-8 rounded-lg border border-slate-300 dark:border-border-dark dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none text-sm placeholder:text-slate-400"
                placeholder="••••••••"
              />
            </div>
          </div>
        </div>

        <div>
          <div className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5"
            >
              Confirmar Senha
            </label>
            <div className="relative">
              <div className="absolute left-2 top-1/2 -translate-y-1/2 text-slate-400">
                <Shield size={18} />
              </div>
              <input
                id="password"
                name="password"
                autoComplete="current-password"
                required={true}
                className="w-full py-3 pl-8 rounded-lg border border-slate-300 dark:border-border-dark dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none text-sm placeholder:text-slate-400"
                placeholder="••••••••"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              className="h-4 w-4 text-primary accent-blue-600 focus:ring-primary border-slate-300 dark:border-border-dark rounded bg-white dark:bg-slate-900 transition-colors cursor-pointer"
              id="terms"
              name="terms"
              type="checkbox"
            />
            <label
              className="ml-2 block text-sm text-slate-600 dark:text-slate-400"
              htmlFor="terms"
            >
              Eu concordo com os{" "}
              <a className="font-bold text-primary hover:underline" href="#">
                Termos de Serviço
              </a>{" "}
              e a{" "}
              <a className="font-bold text-primary hover:underline" href="#">
                Política de Privacidade
              </a>
              .
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 rounded-lg transition-all shadow-lg shadow-primary/20 active:scale-[0.98] cursor-pointer"
        >
          Criar minha conta
        </button>
      </form>
      <p className="mt-10 text-center text-sm text-slate-600 dark:text-slate-400">
        Já possui uma conta?{" "}
        <Link
          className="font-bold text-primary hover:text-primary/80 transition-colors ml-1"
          to="/login"
        >
          Entrar
        </Link>
      </p>
    </main>
  );
}
