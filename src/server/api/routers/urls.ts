import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { z } from "zod";
import { nanoid } from "nanoid";
import { urls } from "~/server/db/schema";
import { desc } from "drizzle-orm";
import { env } from "~/env.mjs";

// const getShortLink = (url) => ({
// ...url,

// })

export const urlRouter = createTRPCRouter({
  createShortUrl: publicProcedure
    .input(z.object({ longUrl: z.string().url() }))
    .mutation(async ({ ctx: { db }, input }) => {
      return (
        await db
          .insert(urls)
          .values({ longUrl: input.longUrl, shortUrl: nanoid(5) })
          .returning()
      )[0];
    }),
  getAllUrls: publicProcedure.query(async ({ ctx: { db } }) => {
    return (
      await db.select().from(urls).orderBy(desc(urls.createdAt)).limit(5)
    ).map((url) => ({ ...url, shortUrl: `${env.BASE_URI}/${url.shortUrl}` }));
  }),
});
