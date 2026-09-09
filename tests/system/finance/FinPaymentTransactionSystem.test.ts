import { FinPaymentTransactionRpcServer } from "../../../services/core-engine/src/finance/rpc/servers/FinPaymentTransactionRpcServer";
import { FinPaymentTransactionFormValidator } from "../../../packages/types/src/forms/finance/FinPaymentTransactionFormSchema";

describe("FinPaymentTransaction System Level Integration Test", () => {
  const server = new FinPaymentTransactionRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = FinPaymentTransactionFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
