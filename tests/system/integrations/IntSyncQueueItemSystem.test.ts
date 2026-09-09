import { IntSyncQueueItemRpcServer } from "../../../services/core-engine/src/integrations/rpc/servers/IntSyncQueueItemRpcServer";
import { IntSyncQueueItemFormValidator } from "../../../packages/types/src/forms/integrations/IntSyncQueueItemFormSchema";

describe("IntSyncQueueItem System Level Integration Test", () => {
  const server = new IntSyncQueueItemRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = IntSyncQueueItemFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
