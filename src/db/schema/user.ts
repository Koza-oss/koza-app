import { index, integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { createId } from "@paralleldrive/cuid2";
import { sql } from "drizzle-orm";

const user = sqliteTable(
  "user",
  {
    id: text("id").primaryKey().notNull().$default(createId),
    userId: integer("user_id").notNull(),
    createdAt: integer("created_at", { mode: "timestamp" })
      .notNull()
      .default(sql`(unixepoch())`)
      .notNull(),
    updatedAt: integer("updated_at", { mode: "timestamp" })
      .notNull()
      .$onUpdate(() => new Date()),
  },
  (t) => [index("eat_userId").on(t.userId)]
);

export default user;
