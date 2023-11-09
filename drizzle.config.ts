import { type Config } from "drizzle-kit";

import { env } from "~/env.mjs";

export default {
  out: "./drizzle",
  schema: "./src/server/db/schema.ts",
  driver: "pg",
  dbCredentials: {
    connectionString: env.DATABASE_URL,
  },
  // tablesFilter: ["t3_url_shortener_*"],
} satisfies Config;
