export default function CtaCard() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-950 px-6">
      <div className="flex w-full max-w-xl flex-col gap-6 text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-zinc-500">
          Company OS
        </p>
        <h1 className="text-4xl font-semibold leading-tight tracking-tight text-zinc-50 sm:text-5xl">
          5 design partners.
          <br />
          $99/mo, 6 months.
        </h1>
        <p className="text-xl text-zinc-300">
          company-os-livid.vercel.app
        </p>
        <p className="text-base text-zinc-500">
          Reply or DM if you want a slot.
        </p>
      </div>
    </main>
  );
}
