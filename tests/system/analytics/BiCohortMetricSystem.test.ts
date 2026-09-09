import { BiCohortMetricRpcServer } from "../../../services/core-engine/src/analytics/rpc/servers/BiCohortMetricRpcServer";
import { BiCohortMetricFormValidator } from "../../../packages/types/src/forms/analytics/BiCohortMetricFormSchema";

describe("BiCohortMetric System Level Integration Test", () => {
  const server = new BiCohortMetricRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = BiCohortMetricFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
