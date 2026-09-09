import { IdRoleRpcServer } from "../../../services/core-engine/src/identity/rpc/servers/IdRoleRpcServer";
import { IdRoleFormValidator } from "../../../packages/types/src/forms/identity/IdRoleFormSchema";

describe("IdRole System Level Integration Test", () => {
  const server = new IdRoleRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = IdRoleFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
