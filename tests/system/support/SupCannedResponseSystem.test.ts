import { SupCannedResponseRpcServer } from "../../../services/core-engine/src/support/rpc/servers/SupCannedResponseRpcServer";
import { SupCannedResponseFormValidator } from "../../../packages/types/src/forms/support/SupCannedResponseFormSchema";

describe("SupCannedResponse System Level Integration Test", () => {
  const server = new SupCannedResponseRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = SupCannedResponseFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
