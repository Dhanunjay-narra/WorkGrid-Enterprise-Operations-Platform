import { InvGoodsReceiptRpcServer } from "../../../services/core-engine/src/inventory/rpc/servers/InvGoodsReceiptRpcServer";
import { InvGoodsReceiptFormValidator } from "../../../packages/types/src/forms/inventory/InvGoodsReceiptFormSchema";

describe("InvGoodsReceipt System Level Integration Test", () => {
  const server = new InvGoodsReceiptRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = InvGoodsReceiptFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
