import {
  pgTableCreator,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export const myPgTable = pgTableCreator((name) => `t3_url_shortener_${name}`);

export const urls = myPgTable("urls", {
  id: serial("id").primaryKey().notNull(),
  longUrl: varchar("long_url", { length: 256 }).notNull(),
  shortUrl: varchar("sort_url", { length: 256 }).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
