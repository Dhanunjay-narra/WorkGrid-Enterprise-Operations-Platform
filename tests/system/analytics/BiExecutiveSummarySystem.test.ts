import { BiExecutiveSummaryRpcServer } from "../../../services/core-engine/src/analytics/rpc/servers/BiExecutiveSummaryRpcServer";
import { BiExecutiveSummaryFormValidator } from "../../../packages/types/src/forms/analytics/BiExecutiveSummaryFormSchema";

describe("BiExecutiveSummary System Level Integration Test", () => {
  const server = new BiExecutiveSummaryRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = BiExecutiveSummaryFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
