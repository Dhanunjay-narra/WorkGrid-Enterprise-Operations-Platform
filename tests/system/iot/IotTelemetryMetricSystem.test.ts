import { IotTelemetryMetricRpcServer } from "../../../services/core-engine/src/iot/rpc/servers/IotTelemetryMetricRpcServer";
import { IotTelemetryMetricFormValidator } from "../../../packages/types/src/forms/iot/IotTelemetryMetricFormSchema";

describe("IotTelemetryMetric System Level Integration Test", () => {
  const server = new IotTelemetryMetricRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = IotTelemetryMetricFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
