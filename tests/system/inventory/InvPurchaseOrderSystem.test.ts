import { InvPurchaseOrderRpcServer } from "../../../services/core-engine/src/inventory/rpc/servers/InvPurchaseOrderRpcServer";
import { InvPurchaseOrderFormValidator } from "../../../packages/types/src/forms/inventory/InvPurchaseOrderFormSchema";

describe("InvPurchaseOrder System Level Integration Test", () => {
  const server = new InvPurchaseOrderRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = InvPurchaseOrderFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
