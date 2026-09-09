import { SupQueueRpcServer } from "../../../services/core-engine/src/support/rpc/servers/SupQueueRpcServer";
import { SupQueueFormValidator } from "../../../packages/types/src/forms/support/SupQueueFormSchema";

describe("SupQueue System Level Integration Test", () => {
  const server = new SupQueueRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = SupQueueFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
