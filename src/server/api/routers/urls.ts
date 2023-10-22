import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { urls } from "~/server/db/schema";

export const urlRouter = createTRPCRouter({
  getAllUrls: publicProcedure.query(({ ctx: { db } }) => {
    return db.select().from(urls);
  }),
});
