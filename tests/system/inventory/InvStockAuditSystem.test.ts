import { InvStockAuditRpcServer } from "../../../services/core-engine/src/inventory/rpc/servers/InvStockAuditRpcServer";
import { InvStockAuditFormValidator } from "../../../packages/types/src/forms/inventory/InvStockAuditFormSchema";

describe("InvStockAudit System Level Integration Test", () => {
  const server = new InvStockAuditRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = InvStockAuditFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
