import { userService } from "./user.service";

export const userController = {
  async getAll() {
    const users = await userService.getAll();
    return { success: true, data: users };
  },

  async getById(id: number) {
    const user = await userService.getById(id);
    if (!user) {
      return { success: false, error: "User not found" };
    }
    return { success: true, data: user };
  },

  async create(data: { name: string; email: string }) {
    const user = await userService.create(data);
    return { success: true, data: user };
  },

  async update(id: number, data: { name?: string; email?: string }) {
    const user = await userService.update(id, data);
    if (!user) {
      return { success: false, error: "User not found" };
    }
    return { success: true, data: user };
  },

  async delete(id: number) {
    await userService.delete(id);
    return { success: true, message: "User deleted" };
  },
};
