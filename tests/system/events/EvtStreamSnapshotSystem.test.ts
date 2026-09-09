import { EvtStreamSnapshotRpcServer } from "../../../services/core-engine/src/events/rpc/servers/EvtStreamSnapshotRpcServer";
import { EvtStreamSnapshotFormValidator } from "../../../packages/types/src/forms/events/EvtStreamSnapshotFormSchema";

describe("EvtStreamSnapshot System Level Integration Test", () => {
  const server = new EvtStreamSnapshotRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = EvtStreamSnapshotFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
