import { db } from "../../config/db";
import { users } from "../../db/schema";
import { eq } from "drizzle-orm";

export const userService = {
  async getAll() {
    return db.select().from(users);
  },

  async getById(id: number) {
    const result = await db.select().from(users).where(eq(users.id, id));
    return result[0] ?? null;
  },

  async create(data: { name: string; email: string }) {
    const result = await db.insert(users).values(data);
    return { id: Number(result[0].insertId), ...data };
  },

  async update(id: number, data: { name?: string; email?: string }) {
    await db.update(users).set(data).where(eq(users.id, id));
    return userService.getById(id);
  },

  async delete(id: number) {
    await db.delete(users).where(eq(users.id, id));
    return { success: true };
  },
};
