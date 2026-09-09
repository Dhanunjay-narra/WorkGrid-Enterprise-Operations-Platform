import { InvSkuItemRpcServer } from "../../../services/core-engine/src/inventory/rpc/servers/InvSkuItemRpcServer";
import { InvSkuItemFormValidator } from "../../../packages/types/src/forms/inventory/InvSkuItemFormSchema";

describe("InvSkuItem System Level Integration Test", () => {
  const server = new InvSkuItemRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = InvSkuItemFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
