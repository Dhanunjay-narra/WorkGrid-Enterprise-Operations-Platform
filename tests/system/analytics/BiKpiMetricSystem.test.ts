import { BiKpiMetricRpcServer } from "../../../services/core-engine/src/analytics/rpc/servers/BiKpiMetricRpcServer";
import { BiKpiMetricFormValidator } from "../../../packages/types/src/forms/analytics/BiKpiMetricFormSchema";

describe("BiKpiMetric System Level Integration Test", () => {
  const server = new BiKpiMetricRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = BiKpiMetricFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
