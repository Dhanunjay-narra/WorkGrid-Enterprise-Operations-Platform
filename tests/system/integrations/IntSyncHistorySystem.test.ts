import { IntSyncHistoryRpcServer } from "../../../services/core-engine/src/integrations/rpc/servers/IntSyncHistoryRpcServer";
import { IntSyncHistoryFormValidator } from "../../../packages/types/src/forms/integrations/IntSyncHistoryFormSchema";

describe("IntSyncHistory System Level Integration Test", () => {
  const server = new IntSyncHistoryRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = IntSyncHistoryFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
