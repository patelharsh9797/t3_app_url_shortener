import { notFound, redirect } from "next/navigation";
import { api } from "~/trpc/server";

export default async function LinkPage(props: { params: { slug: string } }) {
  const data = await api.url.getShortLinkInfo.query({
    slug: props.params.slug,
  });

  if (!data) return notFound();

  return redirect(data.longUrl);
}
