import { Elysia } from "elysia";
import { userRoutes } from "./modules/user/user.routes";

const app = new Elysia()
  .group("/api", (app) => app.use(userRoutes))
  .get("/", () => ({ message: "Hello from Elysia" }))
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);