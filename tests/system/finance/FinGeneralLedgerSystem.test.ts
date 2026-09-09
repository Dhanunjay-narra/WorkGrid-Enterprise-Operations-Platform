import { FinGeneralLedgerRpcServer } from "../../../services/core-engine/src/finance/rpc/servers/FinGeneralLedgerRpcServer";
import { FinGeneralLedgerFormValidator } from "../../../packages/types/src/forms/finance/FinGeneralLedgerFormSchema";

describe("FinGeneralLedger System Level Integration Test", () => {
  const server = new FinGeneralLedgerRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = FinGeneralLedgerFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
