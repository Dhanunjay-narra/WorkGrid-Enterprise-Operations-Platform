import { FinFxRateHistoryRpcServer } from "../../../services/core-engine/src/finance/rpc/servers/FinFxRateHistoryRpcServer";
import { FinFxRateHistoryFormValidator } from "../../../packages/types/src/forms/finance/FinFxRateHistoryFormSchema";

describe("FinFxRateHistory System Level Integration Test", () => {
  const server = new FinFxRateHistoryRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = FinFxRateHistoryFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
