import { InvStorageBinRpcServer } from "../../../services/core-engine/src/inventory/rpc/servers/InvStorageBinRpcServer";
import { InvStorageBinFormValidator } from "../../../packages/types/src/forms/inventory/InvStorageBinFormSchema";

describe("InvStorageBin System Level Integration Test", () => {
  const server = new InvStorageBinRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = InvStorageBinFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
