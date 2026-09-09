import { InvStockLevelRpcServer } from "../../../services/core-engine/src/inventory/rpc/servers/InvStockLevelRpcServer";
import { InvStockLevelFormValidator } from "../../../packages/types/src/forms/inventory/InvStockLevelFormSchema";

describe("InvStockLevel System Level Integration Test", () => {
  const server = new InvStockLevelRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = InvStockLevelFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
