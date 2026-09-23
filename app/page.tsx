import IntegrationCardDemo from "@/components/ui/integration-card";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-4 sm:p-8">
      <div className="w-full max-w-4xl flex flex-col items-center gap-8">
        <div className="text-center space-y-2">
          <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400">
            Component Showcase
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Integration Card Component
          </h1>
          <p className="text-slate-400 max-w-md mx-auto text-sm sm:text-base">
            Interactive animated card connected with Framer Motion, shadcn primitives, and Tailwind CSS.
          </p>
        </div>

        <div className="w-full flex justify-center">
          <IntegrationCardDemo />
        </div>
      </div>
    </main>
  );
}
