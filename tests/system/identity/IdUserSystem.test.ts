import { IdUserRpcServer } from "../../../services/core-engine/src/identity/rpc/servers/IdUserRpcServer";
import { IdUserFormValidator } from "../../../packages/types/src/forms/identity/IdUserFormSchema";

describe("IdUser System Level Integration Test", () => {
  const server = new IdUserRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = IdUserFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
