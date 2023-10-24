import URLForm from "~/components/url-form";
import { api } from "~/trpc/server";

export default async function Home() {
  // const hello = await api.url.getAllUrls.query();

  return (
    <section className="flex min-h-screen flex-col gap-8 text-center">
      <div className="mt-8">
        <h1 className="text-4xl font-bold">
          <span className="text-primary">ShortMe</span> - URL Shortener
        </h1>
        <h2 className="text-muted-foreground mt-4 text-xl">
          "Trim the Fat, Not the Content: ShortMe URL Shortener - Where Bigger
          is Not Always Better! 😅"
        </h2>
        <p className="text-muted-foreground mt-4 text-xl">
          <span className="text-primary">ShortMe</span> - Your go to destination
          for hassle free URL shortening. Say goodbye to long, cumbersome links
          and hello to sleek, shareable short URLs.
        </p>
      </div>

      <div className="w-4xl mt-8 space-y-4">
        <p className="text-muted-foreground text-xl">
          Transform Long URLs by just pasting url below.
        </p>
        <URLForm />
      </div>
    </section>
  );
}
