import { api } from "~/trpc/server";

export default async function Home() {
  // const hello = await api.url.getAllUrls.query();

  return (
    <div className="min-h-screen">
      <h1>Main Content</h1>
    </div>
  );
}
