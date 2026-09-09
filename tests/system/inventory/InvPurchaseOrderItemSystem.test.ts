import { InvPurchaseOrderItemRpcServer } from "../../../services/core-engine/src/inventory/rpc/servers/InvPurchaseOrderItemRpcServer";
import { InvPurchaseOrderItemFormValidator } from "../../../packages/types/src/forms/inventory/InvPurchaseOrderItemFormSchema";

describe("InvPurchaseOrderItem System Level Integration Test", () => {
  const server = new InvPurchaseOrderItemRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = InvPurchaseOrderItemFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
