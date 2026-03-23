import { Van } from "lucide-react";

export default function AppLogo() {
  return (
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
  );
}
