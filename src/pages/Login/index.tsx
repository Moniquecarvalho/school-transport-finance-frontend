// import { useState } from "react";
import loginImage from "../../assets/images/login-image.png";

export function Login() {
  // const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <section className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen flex items-center justify-center p-4">
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
            <div className="relative z-20 p-12 flex flex-col justify-end h-full">
              <div className="mb-6">
                <div className="bg-primary/20 backdrop-blur-md w-12 h-12 rounded-lg flex items-center justify-center mb-4 border border-primary/30">
                  <span className="material-symbols-outlined text-primary text-3xl">
                    airport_shuttle
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-white leading-tight mb-4">
                  Sua rota, nossa tecnologia.
                </h2>
                <p className="text-slate-300 text-lg font-light leading-relaxed">
                  Segurança em cada quilômetro para quem transporta o futuro.
                  Gerencie frotas, rotas e alunos com precisão.
                </p>
              </div>
              <div className="flex gap-2">
                <div className="h-1 w-8 bg-primary rounded-full"></div>
                <div className="h-1 w-2 bg-slate-600 rounded-full"></div>
                <div className="h-1 w-2 bg-slate-600 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
