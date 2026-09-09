import { IdSessionRpcServer } from "../../../services/core-engine/src/identity/rpc/servers/IdSessionRpcServer";
import { IdSessionFormValidator } from "../../../packages/types/src/forms/identity/IdSessionFormSchema";

describe("IdSession System Level Integration Test", () => {
  const server = new IdSessionRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = IdSessionFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
