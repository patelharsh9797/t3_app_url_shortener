import { z } from "zod";
import { nanoid } from "nanoid";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { urls } from "~/server/db/schema";
import { desc } from "drizzle-orm";

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
  getAllUrls: publicProcedure.query(({ ctx: { db } }) => {
    return db.select().from(urls).orderBy(desc(urls.createdAt)).limit(5);
  }),
});
