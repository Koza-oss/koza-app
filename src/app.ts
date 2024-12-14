import db from "./db";
import user from "./db/schema/user";

const test = async () => {
  await db.insert(user).values({
    userId: 10,
  });
};
