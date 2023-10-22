// import { Client } from "@planetscale/database";
// import { drizzle } from "drizzle-orm/planetscale-serverless";

import { env } from "~/env.mjs";

// export const db = drizzle(
//   new Client({
//     url: env.DATABASE_URL,
//   }).connection(),
//   { schema }
// );

// import { drizzle } from "drizzle-orm/postgres-js";
// import postgres from "postgres";

// const connectionString = process.env.DATABASE_URL;
// const client = postgres(connectionString);
// export const db = drizzle(client);

import { neon, neonConfig } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

neonConfig.fetchConnectionCache = true;

const client = neon(env.DATABASE_URL);
export const db = drizzle(client);
