import { IdTenantRpcServer } from "../../../services/core-engine/src/identity/rpc/servers/IdTenantRpcServer";
import { IdTenantFormValidator } from "../../../packages/types/src/forms/identity/IdTenantFormSchema";

describe("IdTenant System Level Integration Test", () => {
  const server = new IdTenantRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = IdTenantFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
