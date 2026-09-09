import { WfExecutionStepMetricRpcServer } from "../../../services/core-engine/src/workflow/rpc/servers/WfExecutionStepMetricRpcServer";
import { WfExecutionStepMetricFormValidator } from "../../../packages/types/src/forms/workflow/WfExecutionStepMetricFormSchema";

describe("WfExecutionStepMetric System Level Integration Test", () => {
  const server = new WfExecutionStepMetricRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = WfExecutionStepMetricFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
