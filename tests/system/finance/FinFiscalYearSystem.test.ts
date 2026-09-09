import { FinFiscalYearRpcServer } from "../../../services/core-engine/src/finance/rpc/servers/FinFiscalYearRpcServer";
import { FinFiscalYearFormValidator } from "../../../packages/types/src/forms/finance/FinFiscalYearFormSchema";

describe("FinFiscalYear System Level Integration Test", () => {
  const server = new FinFiscalYearRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = FinFiscalYearFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
