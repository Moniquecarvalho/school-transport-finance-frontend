import AppLogo from "../../components/AppLogo";
import { auth } from "../../services/firebaseConfig";
import { onAuthStateChanged, type User as FirebaseUser } from "firebase/auth";
import { useEffect, useState } from "react";
import {
  LayoutDashboard,
  Users,
  User,
  GraduationCap,
  Route,
  DollarSign,
  Wallet,
  Settings,
  CircleQuestionMark,
} from "lucide-react";

export function Dashboard() {
  const [user, setUser] = useState<FirebaseUser | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <aside
        className=" fixed md:static z-40 w-64 h-screen bg-[#0F141E] border-r border-slate-800/60 flex flex-col transform transition-transform duration-300 -translate-x-full md:translate-x-0"
      >
        <div className="p-6 min-h-full flex flex-col">
          <AppLogo />
          <nav className="flex flex-col gap-1.5 grow">
            <a
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-200 hover:bg-primary/10 hover:text-primary transition-all duration-200"
              href="#"
            >
              <LayoutDashboard />
              <span className="text-sm font-medium flex items-center">
                Visão Geral
              </span>
            </a>

            <a
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-200 hover:bg-primary/10 hover:text-primary transition-all duration-200"
              href="#"
            >
              <User />
              <span className="text-sm font-medium">Responsáveis</span>
            </a>

            <a
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-200 hover:bg-primary/10 hover:text-primary transition-all duration-200"
              href="#"
            >
              <Users />
              <span className="text-sm font-medium flex items-center">
                Alunos
              </span>
            </a>

            <a
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-200 hover:bg-primary/10 hover:text-primary transition-all duration-200"
              href="#"
            >
              <GraduationCap />
              <span className="text-sm font-medium flex items-center">
                Escolas
              </span>
            </a>

            <a
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-200 hover:bg-primary/10 hover:text-primary transition-all duration-200"
              href="#"
            >
              <Route />
              <span className="text-sm font-medium flex items-center">
                Rotas
              </span>
            </a>
            <a
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-200 hover:bg-primary/10 hover:text-primary transition-all duration-200"
              href="#"
            >
              <DollarSign />
              <span className="text-sm font-medium flex items-center">
                Financeiro
              </span>
            </a>

            <a
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-200 hover:bg-primary/10 hover:text-primary transition-all duration-200"
              href="#"
            >
              <Wallet />
              <span className="text-sm font-medium flex items-center">
                Despesas
              </span>
            </a>

            <div className="mt-10 mb-2 px-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              Sistemas
            </div>
            <a
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-200 hover:bg-primary/10 hover:text-primary transition-all duration-200"
              href="#"
            >
              <Settings />
              <span className="text-sm font-medium flex items-center">
                Configurações
              </span>
            </a>

            <a
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-200 hover:bg-primary/10 hover:text-primary transition-all duration-200"
              href="#"
            >
              <CircleQuestionMark />
              <span className="text-sm font-medium flex items-center">
                Ajuda
              </span>
            </a>
            <div className="mt-auto border-t border-slate-800/60 pt-6">
              <div className="flex items-center gap-3 p-2 rounded-xl bg-slate-800/30">
                {user?.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt="Avatar"
                    className="w-10 h-10 rounded-lg object-cover border border-slate-700"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-lg bg-slate-700 flex items-center justify-center text-white font-bold">
                    {user?.displayName?.charAt(0) || "U"}
                  </div>
                )}

                <div className="overflow-hidden">
                  <p className="text-sm font-bold text-white truncate">
                    {user?.displayName || "Usuário"}
                  </p>

                  <p className="text-[10px] text-slate-500 font-medium">
                    Plano Gratuito
                  </p>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </aside>
    </>
  );
}
