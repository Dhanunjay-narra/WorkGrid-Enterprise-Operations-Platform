import { InvStockMovementRpcServer } from "../../../services/core-engine/src/inventory/rpc/servers/InvStockMovementRpcServer";
import { InvStockMovementFormValidator } from "../../../packages/types/src/forms/inventory/InvStockMovementFormSchema";

describe("InvStockMovement System Level Integration Test", () => {
  const server = new InvStockMovementRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = InvStockMovementFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
