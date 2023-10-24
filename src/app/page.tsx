import URLForm from "~/components/url-form";

export default function Home() {
  return (
    <section className="flex min-h-screen flex-col gap-8 text-center">
      <div className="mt-8">
        <h1 className="text-4xl font-bold">
          <span className="text-primary">ShortMe</span> - URL Shortener
        </h1>
        <h2 className="mt-4 text-xl text-muted-foreground">
          {`"Trim the Fat, Not the Content: ShortMe URL Shortener - Where Bigger
          is Not Always Better! 😅"`}
        </h2>
        <p className="mt-4 text-xl text-muted-foreground">
          <span className="text-primary">ShortMe</span> - Your go to destination
          for hassle free URL shortening. Say goodbye to long, cumbersome links
          and hello to sleek, shareable short URLs.
        </p>
      </div>

      <div className="relative isolate">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden opacity-50 blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="w-4xl mt-8 space-y-4">
          <p className="mb-4 text-xl text-muted-foreground">
            Transform Long URLs by just pasting url below.
          </p>
          <URLForm />
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -top-40 -z-10  transform-gpu overflow-hidden opacity-50 blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </section>
  );
}
