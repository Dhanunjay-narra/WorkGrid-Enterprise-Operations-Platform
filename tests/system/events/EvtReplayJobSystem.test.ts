import { EvtReplayJobRpcServer } from "../../../services/core-engine/src/events/rpc/servers/EvtReplayJobRpcServer";
import { EvtReplayJobFormValidator } from "../../../packages/types/src/forms/events/EvtReplayJobFormSchema";

describe("EvtReplayJob System Level Integration Test", () => {
  const server = new EvtReplayJobRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = EvtReplayJobFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
