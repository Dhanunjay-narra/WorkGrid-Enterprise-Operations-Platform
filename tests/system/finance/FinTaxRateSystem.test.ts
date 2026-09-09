import { FinTaxRateRpcServer } from "../../../services/core-engine/src/finance/rpc/servers/FinTaxRateRpcServer";
import { FinTaxRateFormValidator } from "../../../packages/types/src/forms/finance/FinTaxRateFormSchema";

describe("FinTaxRate System Level Integration Test", () => {
  const server = new FinTaxRateRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = FinTaxRateFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
