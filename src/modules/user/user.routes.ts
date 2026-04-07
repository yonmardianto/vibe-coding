import { Elysia, t } from "elysia";
import { userController } from "./user.controller";

export const userRoutes = new Elysia({ prefix: "/users" })
  .get("/", () => userController.getAll())

  .get("/:id", ({ params }) => userController.getById(Number(params.id)), {
    params: t.Object({ id: t.String() }),
  })

  .post("/", ({ body }) => userController.create(body), {
    body: t.Object({
      name: t.String(),
      email: t.String(),
    }),
  })

  .put("/:id", ({ params, body }) => userController.update(Number(params.id), body), {
    params: t.Object({ id: t.String() }),
    body: t.Object({
      name: t.Optional(t.String()),
      email: t.Optional(t.String()),
    }),
  })

  .delete("/:id", ({ params }) => userController.delete(Number(params.id)), {
    params: t.Object({ id: t.String() }),
  });
