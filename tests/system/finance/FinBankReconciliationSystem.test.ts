import { FinBankReconciliationRpcServer } from "../../../services/core-engine/src/finance/rpc/servers/FinBankReconciliationRpcServer";
import { FinBankReconciliationFormValidator } from "../../../packages/types/src/forms/finance/FinBankReconciliationFormSchema";

describe("FinBankReconciliation System Level Integration Test", () => {
  const server = new FinBankReconciliationRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = FinBankReconciliationFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
