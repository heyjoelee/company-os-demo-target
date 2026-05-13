export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 px-6 py-24 font-sans dark:bg-black">
      <div className="flex w-full max-w-2xl flex-col gap-8">
        <div className="flex items-center gap-3 text-sm font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
          Company OS — demo target
        </div>
        <h1 className="text-5xl font-semibold leading-tight tracking-tight text-zinc-950 dark:text-zinc-50">
          Shipped by the CTO agent at 2026-05-13 21:00 KST.
        </h1>
        <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          This page is the canvas. When a Company OS agent picks up an issue, it edits this file, commits, pushes,
          and Vercel renders a new preview URL. Everything you see here was produced by that loop — not a
          screenshot, not a wireframe.
        </p>
        <div className="flex flex-col gap-2 rounded-lg border border-zinc-200 bg-white p-6 text-sm leading-6 text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300">
          <div className="font-medium text-zinc-950 dark:text-zinc-50">Run trace</div>
          <div>Open the Paperclip run page for the change to see model + tool + git events for this commit.</div>
        </div>
      </div>
    </main>
  );
}
