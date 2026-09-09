import { HrTaxDeductionRpcServer } from "../../../services/core-engine/src/hr/rpc/servers/HrTaxDeductionRpcServer";
import { HrTaxDeductionFormValidator } from "../../../packages/types/src/forms/hr/HrTaxDeductionFormSchema";

describe("HrTaxDeduction System Level Integration Test", () => {
  const server = new HrTaxDeductionRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = HrTaxDeductionFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
