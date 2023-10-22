// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

// import { sql } from "drizzle-orm";
// import {
//   bigint,
//   index,
//   mysqlTableCreator,
//   timestamp,
//   varchar,
// } from "drizzle-orm/mysql-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */

// export const mysqlTable = mysqlTableCreator(
//   (name) => `t3_url_shortener_${name}`,
// );

// export const posts = mysqlTable(
//   "urls",
//   {
//     id: bigint("id", { mode: "number" }).primaryKey().autoincrement(),
//     longUrl: varchar("long_url", { length: 256 }),
//     shortUrl: varchar("sort_url", { length: 256 }),
//     createdAt: timestamp("created_at")
//       .default(sql`CURRENT_TIMESTAMP`)
//       .notNull(),
//     updatedAt: timestamp("updatedAt").onUpdateNow(),
//   },
//   (example) => ({
//     longUrlIndex: index("long_url_idx").on(example.longUrl),
//   }),
// );

import {
  pgTableCreator,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export const myPgTable = pgTableCreator((name) => `t3_url_shortener_${name}`);

export const urls = myPgTable("urls", {
  id: serial("id").primaryKey().notNull(),
  longUrl: varchar("long_url", { length: 256 }),
  shortUrl: varchar("sort_url", { length: 256 }),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
