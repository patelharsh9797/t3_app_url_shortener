import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { z } from "zod";
import { nanoid } from "nanoid";
import { urls } from "~/server/db/schema";
import { desc, eq, InferSelectModel } from "drizzle-orm";
import { getBaseUrl } from "~/trpc/shared";

type URLType = InferSelectModel<typeof urls>;

const filterShortLinks = (url: URLType): URLType => ({
  ...url,
  shortUrl: `${getBaseUrl()}/${url.shortUrl}`,
});

export const urlRouter = createTRPCRouter({
  createShortUrl: publicProcedure
    .input(z.object({ longUrl: z.string().url() }))
    .mutation(async ({ ctx: { db }, input }) => {
      return (
        await db
          .insert(urls)
          .values({ longUrl: input.longUrl, shortUrl: nanoid(5) })
          .returning()
      ).map(filterShortLinks)[0];
    }),
  getAllUrls: publicProcedure.query(async ({ ctx: { db } }) => {
    return (
      await db.select().from(urls).orderBy(desc(urls.createdAt)).limit(5)
    ).map(filterShortLinks);
  }),
  getShortLinkInfo: publicProcedure
    .input(z.object({ slug: z.string() }))
    .query(async ({ ctx: { db }, input: { slug } }) => {
      return (await db.select().from(urls).where(eq(urls.shortUrl, slug)))[0];
    }),
});
