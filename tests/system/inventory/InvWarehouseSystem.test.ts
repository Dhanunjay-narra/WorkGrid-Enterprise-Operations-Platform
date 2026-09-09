import { InvWarehouseRpcServer } from "../../../services/core-engine/src/inventory/rpc/servers/InvWarehouseRpcServer";
import { InvWarehouseFormValidator } from "../../../packages/types/src/forms/inventory/InvWarehouseFormSchema";

describe("InvWarehouse System Level Integration Test", () => {
  const server = new InvWarehouseRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = InvWarehouseFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
