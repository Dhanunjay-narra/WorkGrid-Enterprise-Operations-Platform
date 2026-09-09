import { FinExpenseReceiptRpcServer } from "../../../services/core-engine/src/finance/rpc/servers/FinExpenseReceiptRpcServer";
import { FinExpenseReceiptFormValidator } from "../../../packages/types/src/forms/finance/FinExpenseReceiptFormSchema";

describe("FinExpenseReceipt System Level Integration Test", () => {
  const server = new FinExpenseReceiptRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = FinExpenseReceiptFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
