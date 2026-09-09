import { EvtEventBatchRpcServer } from "../../../services/core-engine/src/events/rpc/servers/EvtEventBatchRpcServer";
import { EvtEventBatchFormValidator } from "../../../packages/types/src/forms/events/EvtEventBatchFormSchema";

describe("EvtEventBatch System Level Integration Test", () => {
  const server = new EvtEventBatchRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = EvtEventBatchFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
