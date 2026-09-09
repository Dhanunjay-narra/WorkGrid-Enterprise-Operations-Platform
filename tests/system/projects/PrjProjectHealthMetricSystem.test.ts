import { PrjProjectHealthMetricRpcServer } from "../../../services/core-engine/src/projects/rpc/servers/PrjProjectHealthMetricRpcServer";
import { PrjProjectHealthMetricFormValidator } from "../../../packages/types/src/forms/projects/PrjProjectHealthMetricFormSchema";

describe("PrjProjectHealthMetric System Level Integration Test", () => {
  const server = new PrjProjectHealthMetricRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = PrjProjectHealthMetricFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
