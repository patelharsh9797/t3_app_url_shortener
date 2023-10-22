import { api } from "~/trpc/server";

export default async function Home() {
  const hello = await api.url.getAllUrls.query();

  return (
    <main className="">
      <h1>T3 - URL Shortener</h1>
      {hello.map((post) => (
        <p key={post.id}>
          {post.longUrl} - {post.shortUrl}
        </p>
      ))}
    </main>
  );
}
