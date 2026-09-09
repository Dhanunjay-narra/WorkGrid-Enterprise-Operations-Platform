import { BiAnomalyThresholdRpcServer } from "../../../services/core-engine/src/analytics/rpc/servers/BiAnomalyThresholdRpcServer";
import { BiAnomalyThresholdFormValidator } from "../../../packages/types/src/forms/analytics/BiAnomalyThresholdFormSchema";

describe("BiAnomalyThreshold System Level Integration Test", () => {
  const server = new BiAnomalyThresholdRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = BiAnomalyThresholdFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
