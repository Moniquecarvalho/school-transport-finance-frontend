import loginImage from "../../assets/images/login-image.png";
import { Van, Eye, EyeClosed } from "lucide-react";
import { useState } from "react";

export function Login() {
  const [mostrarSenha, setMostrarSenha] = useState(false);

  return (
    <>
      <aside className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-250 bg-white dark:bg-surface-dark rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-162.5 border border-slate-200 dark:border-border-dark">
          <div className="hidden md:flex md:w-1/2 relative bg-primary/10 overflow-hidden">
            <div className="absolute inset-0 z-0 bg-cover bg-center opacity-80 mix-blend-overlay">
              <img
                src={loginImage}
                className="w-full h-full object-cover"
                alt="Uma van escolar amarela circulando na estrada segura."
              />
            </div>
            <div className="absolute inset-0 bg-linear-to-t from-background-dark/90 via-background-dark/40 to-transparent z-10"></div>
            <div className="relative z-20 p-9 flex flex-col justify-end h-full">
              <div className="mb-5">
                <h2 className="text-3xl font-bold text-white leading-tight mb-4">
                  Sua rota, nossa tecnologia.
                </h2>
                <p className="text-slate-300 text-lg font-light leading-relaxed">
                  Mais controle para quem transporta o futuro todos os dias.
                  Gerencie alunos, rotas e pagamentos com praticidade e
                  segurança.
                </p>
              </div>
              <div className="flex gap-2">
                <div className="h-1 w-8 bg-primary rounded-full"></div>
                <div className="h-1 w-2 bg-slate-600 rounded-full"></div>
                <div className="h-1 w-2 bg-slate-600 rounded-full"></div>
              </div>
            </div>
          </div>

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
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-100">
                Bem-vindo de volta
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
                Acesse sua conta e controle suas finanças.
              </p>
            </div>
            <button className="w-full flex items-center justify-center gap-3 px-4 py-2.5 border border-slate-300 dark:border-border-dark rounded-lg bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors text-slate-700 dark:text-slate-200 font-medium text-sm cursor-pointer">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 
    1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 
    3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />

                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 
    1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 
    20.53 7.7 23 12 23z"
                  fill="#34A853"
                />

                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09
    V7.07H2.18C1.43 8.55 1 10.22 1 
    12s.43 3.45 1.18 4.93l3.66-2.84z"
                  fill="#FBBC05"
                />

                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 
    2.09 14.97 1 12 1 7.7 1 3.99 3.47 
    2.18 7.07l3.66 2.84c.87-2.6 
    3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              <span>Entrar com Google</span>
            </button>

            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-slate-300 dark:border-border-dark"></span>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white dark:bg-surface-dark px-2 text-slate-500 dark:text-slate-400">
                  ou entre com email
                </span>
              </div>
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
              <a
                className="ont-bold text-primary hover:text-primary/80 transition-colors ml-1"
                href="#"
              >
                Cadastre-se
              </a>
            </p>
          </main>
        </div>
      </aside>
    </>
  );
}
