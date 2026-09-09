import { EvtOutboxMessageRpcServer } from "../../../services/core-engine/src/events/rpc/servers/EvtOutboxMessageRpcServer";
import { EvtOutboxMessageFormValidator } from "../../../packages/types/src/forms/events/EvtOutboxMessageFormSchema";

describe("EvtOutboxMessage System Level Integration Test", () => {
  const server = new EvtOutboxMessageRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = EvtOutboxMessageFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
