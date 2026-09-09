import { EvtEventPartitionRpcServer } from "../../../services/core-engine/src/events/rpc/servers/EvtEventPartitionRpcServer";
import { EvtEventPartitionFormValidator } from "../../../packages/types/src/forms/events/EvtEventPartitionFormSchema";

describe("EvtEventPartition System Level Integration Test", () => {
  const server = new EvtEventPartitionRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = EvtEventPartitionFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
