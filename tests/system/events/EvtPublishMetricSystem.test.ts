import { EvtPublishMetricRpcServer } from "../../../services/core-engine/src/events/rpc/servers/EvtPublishMetricRpcServer";
import { EvtPublishMetricFormValidator } from "../../../packages/types/src/forms/events/EvtPublishMetricFormSchema";

describe("EvtPublishMetric System Level Integration Test", () => {
  const server = new EvtPublishMetricRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = EvtPublishMetricFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
